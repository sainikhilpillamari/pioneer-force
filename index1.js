import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const Cmp1 =()=>{
    const[name,setName]= useState();
    const[email,setEmail]= useState();
    const[message,setMessage]= useState();
    let Submit =()=>{
        console.log({name,email,message})
    }
    return(
        <div>
            <h1> Enter Name</h1>
            <input type='text' onChange={(val)=>setName(val.target.value)}/>
            <h1> Enter Email</h1>
            <input type='text' onChange={(val)=>setEmail(val.target.value)}/>
            <h1> Enter Message</h1>
            <input type='text' onChange={(val)=>setMessage(val.target.value)}/>
            <App submit={Submit}/> 
        </div>
    )
}
const App=({Submit})=>
{
    return(
        <div>
           <button onClick={Submit} >Submit</button>
        </div>
    )
}

    







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cmp1 />);
