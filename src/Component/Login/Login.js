import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link,Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {authuser} from '../../Action/Action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
function Login(props) {
  const classes = useStyles();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState(false);
  const onSubmit=async(e)=>{
    e.preventDefault();
     const ans=await axios.post('http://localhost:3000/users/signIn',{
       username:email,
       password:password
     })
      if(ans.data.auth===true)
      {
        props.authuser(ans.data.user.username);
        localStorage.setItem('username',ans.data.user.username);
        setRedirect(true);
       
      }
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
     
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="Username"
            autoComplete="email"
            autoFocus
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <p variant="body2">
                 Forgot password?
              </p>
            </Grid>
          </Grid>
          <p style={{marginTop:0}}>Don't have account? <Link to="/signup">Sign up</Link></p> 
        </form>
      </div>
      
      {
        redirect===true?
        <Redirect to="/" />
        :null
      }
    </Container>
  );
}
const mapStateToProps = state => {
	return {
	   auth: state,
	//   cartUpdated: () => { return true }
	 };
   };
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
	authuser	
}, dispatch)
 }
export default connect(mapStateToProps,mapDispatchToProps)(Login);