import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
const Feed=()=>{
    const[state,setState]=useState({
        redirect : false,
        loading: false,
        tweets : [{
            username:'shlok',
            id:1,
            tweet_text:'hello',
            likes:5, 
            comments:'',
           created_at:new Date().toISOString
        },
        {
            username:'shubham',
            id:1,
            tweet_text:'hey babydoll',
            likes:5, 
            comments:'',
           created_at:new Date().toISOString
        }],
        tweet_text :""
    });
 
    useEffect(()=>{
        if(localStorage.getItem('username')===null)
        {     
            setState({redirect: true});
        }
        else{
            // axios.get('http://localhost:3003/feed')
            //    .then(data =>{
            //     console.log("heelo",data)
            //     setState({
            //         loading: false,
            //         tweets : data.data
            //     })
            // })
        }
    
    },[])

    if(state.redirect){
        return  <Redirect to="/login" />
    }



    if(state.loading) return <h1>Loading....</h1>
   
    
    const postTweet =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3003/tweets/postTweet',{
            text : state.tweet_text
        })
        .then(data =>{
            setState({...state, tweets:[data.data,...state.tweets]})
        })
    }
    const handleChange =(e) =>{
        setState({...state,tweet_text : e.target.value});
    }
    return(
        <div>
            <Header />
            
            <form class="pa4 black-80 w-100" onSubmit={postTweet}>
            <div class="measure w-100 ml7">
                <label for="name" class="f6 b db mb2">POST TWEET <span class="normal black-60">(no bad words)</span></label>
                <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange = {handleChange}/>
             
            </div>
            
            <button type="submit">Submit</button>
            </form >
            <div style={{display:'flex',justifyContent:'center',marginTop:'8px', flexDirection: 'column', alignItems:'center'}}>
              {state.tweets.map(({id, ...args}) =>
                <Post key = {id} {...args}/>
                )}
            </div>
        </div>
    )
}
export default Feed