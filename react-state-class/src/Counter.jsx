import { useState } from "react"

export default function Counter(){
  let [count , setCount] = useState(0); //initialization; it is ignored when Setcount re-render the website


 async function incCount(){
    setCount((preval)=>{
     return preval + 1;
    });
    setCount((preval)=>{
     return preval + 1;
    });
  }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}