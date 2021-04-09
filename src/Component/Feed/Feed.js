import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import {Redirect} from 'react-router-dom';
const Feed=()=>{
    const[redirect,setRedirect]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('username')===null)
        {
            setRedirect(true);
        }
    },[])
    return(
        <div>
            {
                redirect===true?
                <Redirect to="/login" />
                :null
            }
            <Header />
            <div style={{display:'flex',justifyContent:'center',marginTop:'8px'}}>
               <Post />
            </div>
        </div>
    )
}
export default Feed