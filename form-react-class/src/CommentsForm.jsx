import { useState } from "react"

export default function CommentsForm({addNewComment}){
    let [formData , setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,

    });

    let handleInputChange = (event) =>{
       setFormData((curData)=>{
        return {...curData , [event.target.name] : event.target.value};
       });
    };

    let hadnleSumbit = (event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
        username: "",
        remarks: "",
        rating: 5,

    });
    };
    return(
     <div>
        <h4>Give a comment</h4>
        <form onSubmit={hadnleSumbit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br /> <br /> <br />

            <label htmlFor="remarks">Remakes</label>
            <textarea value={formData.remarks} placeholder="add few Remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
            <br /> <br /> <br />
             
            <label htmlFor="raing">Rating</label>
            <input type="number" placeholder="rating"  min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>
            <br /> <br />

            <button>Add Comment</button>
        </form>
     </div>
    )
}