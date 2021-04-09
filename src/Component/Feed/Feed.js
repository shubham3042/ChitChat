import React from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
const Feed=()=>{
    return(
        <div>
            <Header />
            <div style={{display:'flex',justifyContent:'center',marginTop:'8px'}}>
               <Post />
            </div>
        </div>
    )
}
export default Feed