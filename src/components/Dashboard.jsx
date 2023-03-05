import { getAuth } from 'firebase/auth';
import React from 'react';
import "../CssFile/Dashboard.css";

const Dashboard = () => {
    const auth = getAuth();
    const user = auth.currentUser;

   
 let image="./img/"+localStorage.getItem(user.email)+".jpg"

  return (
    <div className='cont'>
        <div className='leftd'>
            <img src={image} alt="cityimg"/>
        </div>
        <div className='rightd'>
      
            <h1>User Information</h1><br></br>
            <p>Name: <span>{user.displayName}</span></p>
            <p>City:<span>{localStorage.getItem(user.email)}</span> </p>
            <p>Email:<span>{user.email}</span> </p>

        </div>
    </div>
  )
}

export default Dashboard