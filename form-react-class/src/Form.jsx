import { useState } from 'react'

export default function Form(){
  let {fullName , setFullName} = useState("");
  let {userName , setUserName} = useState("");
  
   let handleNameChange = (event)=>{
    setFullName(event.target.value);
   }

   let handleUsername = (event) =>{
     setUserName(event.target.value);
   }
    return(
        <form>
          <label htmlFor="fullname">Full name</label>
          <input type="text" placeholder="Enter your full name" value={fullName} onChange={handleNameChange} id='fullname'/>
          <br />
          <label htmlFor="username">User name</label>
          <input type="text" placeholder="Enter your user name" value={userName} onChange={handleUsername} id='username'/><br />
          <button>Submit</button>
        </form>
    )
}