import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import TextField from '@material-ui/core/TextField';
import { setRef } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard({username, tweet_text, likes, comments, created_at}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
const [comment,setComment]=React.useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const Comment=(e)=>{
    setComment(e.target.value);
    if(e.which===13)
    {
        
    }
  }
  const like = () =>{
    
  }
  const date = new Date(created_at);
  return (
    <Card className={classes.root} style={{marginTop:'10px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {username.charAt(0).toUpperCase() }
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {username}
        subheader= {date.getDate() + "-" + (date.getMonth()+1) + "-"+ date.getFullYear()}
      />

    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {tweet_text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"> {likes}
          <FavoriteIcon onClick = {like}/>
        </IconButton>
        <IconButton
        
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >{comments}
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
          </Typography>
          <TextField id="" label="Enter Comment" style={{maxWidth:280}} onKeyPress={Comment} />
          
        </CardContent>
      </Collapse>
    </Card>
  );
}