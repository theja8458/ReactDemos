import { use } from "react";
import { useState } from "react";


export default function LikeButton(){
    let [isLiked, setIsLike] = useState(false);
    let [clicks , isClick] = useState(0);
    
     let toggleLike = () =>{
        setIsLike(!isLiked);
        isClick(clicks+1);
    }
    let likeStyle = {
        color: "red"
    }
    return(
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
                }
               
            </p>
        </div>
    )
}