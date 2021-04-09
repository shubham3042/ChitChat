import React from 'react';
import './Profile.css';
import Post from '../Post/Post';
import Header from '../Header/Header';

const Profile=()=>{
    return(
<React.Fragment>
    <Header />
  <div class="container mt-5 d-flex justify-content-center" style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
        <div style={{width:'30%',height:'25%',backgroundColor:'black'}}>
            <h1></h1>
        </div>
       
    </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
    
    <Post />
    </div>
    </React.Fragment>
    )
}
export default Profile;