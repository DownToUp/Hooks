import React,{ useState } from 'react'
import  '../css/Filtre.css'
const Filtre = ({Movies,FilterItem}) => {
    const [Sname,setname] = useState("");
    const [Snote,setnote] = useState("");

const handle = (e) =>{
    e.preventDefault()
    FilterItem(Sname,Snote)
}


    return (
        <div>
            <form onSubmit={handle}>
            <input type="text" value={Sname} placeholder="serch with title" onChange={(e)=>setname(e.target.value)}></input>
            <input type="text" value={Snote} placeholder="serch with note" onChange={(e)=> setnote(e.target.value)}></input>
            <button className="butt btn btn-danger mr-5">serch</button>
            </form>
         
        </div>
    )
}

export default Filtre
