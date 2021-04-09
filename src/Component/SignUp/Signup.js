import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../../vendor/bootstrap/css/bootstrap.min.css';
import '../../css/main.css';
import '../../css/util.css';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'0px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [mobilenum,setMobilenum]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState(false);
  const [checkUsername,setCheckUsername]=useState(true);
  const onsubmit=async(e)=>{
    e.preventDefault();

  }
  const onCancel=()=>{
    console.log("hello");
     setCheckUsername(false);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e)=>setLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                autoComplete="num"
                name="MobileNum"
                variant="outlined"
                required
                fullWidth
                id="Mobile Num"
                label="Mobile Num"
                autoFocus
                onChange={(e)=>setMobilenum(e.target.value)}
/>
              {/*<FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />*/}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="usernamae"
                label="username"
                type="text"
                id="username"
                autoComplete="username"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          {
              checkUsername===false ?
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onsubmit}
             
            >
            Check Username
            </Button>
            :
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onsubmit}
          >
          Add
          </Button>
          }
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
  { checkUsername===true ?
      <SweetAlert
      warning
  confirmBtnText="Ok Got it"
  confirmBtnBsStyle="danger"
  title="Username is Already Available"
  onConfirm={onCancel}
    >
    </SweetAlert>
:null
  }
      {/*redirect===true?
      <Redirect to="/admin/table" />
      :null
      */}
    </Container>
  );
}