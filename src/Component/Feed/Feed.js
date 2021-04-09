import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
const Feed=()=>{
    const[state,setState]=useState({
        redirect : false,
        loading: true,
        tweets : []
    });
 
    useEffect(()=>{
        if(localStorage.getItem('username')===null)
        {
            
            setState({redirect: true});
        }
        else{
            axios.get('/feed')
            .then(data =>{
                setState({
                    loading: false,
                    tweets : data.data
                })
            })
        }
    
    },[])

    if(state.redirect){
        return  <Redirect to="/login" />
    }



    if(state.loading) return <h1>Loading....</h1>
   
    
   
    return(
        <div>
            <Header />
            <div style={{display:'flex',justifyContent:'center',margin:'8px', flexDirection: 'column', alignItems:'center'}}>
              {state.tweets.map(({id, ...args}) =>
                <Post key = {id} {...args}/>
                )}
            </div>
        </div>
    )
}
export default Feed