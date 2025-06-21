import { useState , useEffect} from "react";

export default function Counter(){

    let[counterX , setCounterX] = useState(0);
    let[counterY , setCounterY] = useState(0);

    let incCountX = () =>{
        setCounterX((curCounter => curCounter + 1));
    };

    let incCountY = () =>{
        setCounterY((curCounter => curCounter + 1));
    };

    useEffect(function printSomething(){
     console.log("This is side effect");
    },[counterX]);
    return(
        <div>
            <h3>count = {counterX}</h3>
            <button onClick={incCountX}>Plus One</button>
            <h3>count = {counterY}</h3>
            <button onClick={incCountY}>Plus One</button>
        </div>
    )
}