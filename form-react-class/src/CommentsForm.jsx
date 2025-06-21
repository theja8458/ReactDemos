import { useState } from "react"
import { useFormik } from 'formik';
 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'User name cannot be empty';
   } 
   return errors;
 };


export default function CommentsForm({addNewComment}){
    // let [formData , setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,

    // });

   const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 2,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event) =>{
    //    setFormData((curData)=>{
    //     return {...curData , [event.target.name] : event.target.value};
    //    });
    // };
    
    // let hadnleSumbit = (event)=>{
    //     if(!formData.username){
    //         console.log("Usename is null");
    //          event.preventDefault();
    //          setIsValid(false);
    //         return;
    //     }
    //     console.log(formData);
    //     addNewComment(formData);
       
    //     setFormData({
    //     username: "",
    //     remarks: "",
    //     rating: 5,

    // });
    // };
    return(
     <div>
        <h4>Give a comment</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
            {formik.errors.username ? <div style={{color: "red",fontWeight:"bold",marginTop: "15px"}}> {formik.errors.username}</div> : null}
            <br /> <br /> <br />

            <label htmlFor="remarks">Remakes</label>
            <textarea value={formik.values.remarks} placeholder="add few Remarks" onChange={formik.handleChange} id="remarks" name="remarks"></textarea>
            <br /> <br /> <br />
             
            <label htmlFor="raing">Rating</label>
            <input type="number" placeholder="rating"  min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} name="rating"/>
            <br /> <br />

            <button type="submit">Add Comment</button>
        </form>
     </div>
    )
}