import { useState } from 'react'

export default function Form(){
  let [formData , setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  
  //  let handleNameChange = (event)=>{
  //   setFullName(event.target.value);
  //  }

  //  let handleUsername = (event) =>{
  //    setUserName(event.target.value);
  //  }

  let handleInputChange = (event)=>{   
    setFormData((curData)=>{
     return {...curData,[event.target.name]:  event.target.value };
    });
  };

  let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
    fullName: "",
    userName: "",
  });
  };

    return(
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full name</label>
          <input type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} id='fullname'name="fullName"/>
          <br />
          <label htmlFor="username">User name</label>
          <input type="text" placeholder="Enter your user name" value={formData.userName} onChange={handleInputChange} id='username' name="userName"/><br />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} id='password' name="password"/><br />
          <button>Submit</button>
        </form>
    )
}