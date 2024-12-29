import { useState } from "react"
import "./LotteryWin.css"


export default function LotteryWin(){
let [num,setNum]=useState(0);
let [msg,setMsg]=useState("");
let generateNum=()=>{
    //console.log("generate num");
    let rand=Math.floor(Math.random()*1000);
    //console.log(rand);
    setNum(rand);
    let ticketNum=rand;
    let sum=0;
    while(ticketNum>0){
        let rem=ticketNum%10;
        sum=sum+rem;
        ticketNum=Math.floor(ticketNum/10);
    }
    console.log(sum)
    if(sum==15){
        setMsg("Congratulations! you won");
    }
    
}

    return(
        <>
        <h1>Lottery Games!</h1>
        <button>{msg}</button>
       <p>{num}</p>
         <hr></hr>
        <button onClick={generateNum}>Generate Lottery</button>
        
        </>
    )
}