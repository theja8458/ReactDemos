import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let [comments , setComments] = useState([{
            username: "@theja",
            remarks: "great job",
            rating: 4
        }]);

    // const formik = useFormik({
    //     initialValues: {
    //         username : "",
    //         remarks: "",
    //         rating : ""
    //     },
    //     validate,
    //     onsubmit: values =>{
    //         alert(JSON.stringify(values, null,2));
    //     }
    // });

    let addNewComment = (comment)=>{
     setComments((currComments)=>[...currComments,comment]);
     console.log("Added new Comment");
    }  
    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,ind)=>{
             return <div className="comment" key={ind}>
           <i><span>{comment.remarks}</span></i>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            &nbsp;
            <p>-{comment.username}</p>
            </div>
            })}
           
        </div>
        <hr />
        <CommentsForm addNewComment={addNewComment} />
        </>
    )
}