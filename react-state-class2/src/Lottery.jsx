import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n,winningSum}){

    let [ticket , setTicket] = useState(genTicket(n));
    let isWinnig = sum(ticket) === winningSum ? true : false;
    
    let buyTicket = ()=>{
    setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
          <Ticket ticket={ticket}/>
            <button onClick={buyTicket} >Buy New Ticket</button>
            <h3>{isWinnig && "Congrutulations, You Won."}</h3>
        </div>
    )
}