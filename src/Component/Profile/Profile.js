import React,{useEffect} from 'react';
import './Profile.css';
import Post from '../Post/Post';
import Header from '../Header/Header';
import {useParams} from 'react-router-dom';
const Profile=()=>{
    let {username}=useParams();
    console.log(username);
    useEffect(()=>{
        //call api username{}
    },[])
    return(
<React.Fragment>
    <Header />
  <div class="container mt-5 d-flex justify-content-center" style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
        <div style={{width:'30%',height:'28%',backgroundColor:'grey',borderRadius:'10px'}}>
                <h3 style={{color:'white'}}>{username}</h3>
                
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'3%',marginBottom:'3%'}}>
                   <div style={{flexDirection:'column'}}>
                       <h3 style={{color:'white'}}>1000</h3>
                       <h3  style={{color:'white'}}>follwers</h3>
                   </div>
                   <div style={{flexDirection:'column',marginLeft:'2%'}}>
                       <h3  style={{color:'white'}}>100</h3>
                       <h3 style={{color:'white'}}>following</h3>
                   </div>
                </div>
                <button style={{backgroundColor:'black',borderRadius:5,padding:'5px',color:'white',marginBottom:'5px'}}>Follow</button>

        </div>
       
    </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
        {//post her
        /*<post />
        */
         }
    </div>
    </React.Fragment>
    )
}
export default Profile;