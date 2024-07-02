import React,{useState} from 'react'
export default function MainComponent (){
    const [turn,setTurn]=useState('0');
    const [winner,setWinner]=useState("");
    const [divs,setdivs]=useState({
        div1:"",
        div2:"",
        div3:"",
        div4:"",
        div5:"",
        div6:"",
        div7:"",
        div8:"",
        div9:""

    });
    
    // const checkwinner=()=>{
        // winning pttern 123 if(div1===div2===div3){
        setWinner({winner:"player1Won"});
        setdivs({ div1:"",
            div2:"",
            div3:"",
            div4:"",
            div5:"",
            div6:"",
            div7:"",
            div8:"",
            div9:""})
    }

    // }
    const handleClick=(e)=>{
        if(turn==='0'){
            let ID=e.target.name;
            setdivs((prevstate)=>{
                return {...prevstate,{ID}:"X"}
            })
            setTurn({turn:1})
           
        }
        else {
            let ID=e.target.id;
            setdivs((prevstate)=>{
                return {...prevstate,{ID}:"O"}
            })
            setTurn({turn:0})
        }
        // checkwinner();
    }
    return (
        <div style={{display:"flex", justifyContent:"center" ,width:"50%" ,margin:"auto"}} className="conatiner">
            
            <div name="1" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div1}</div> 
            <div name="2" style={{color:"red" ,borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div2}</div> 
            <div name="3" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div3}</div> 
            <div name="4" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div4}</div> 
            <div name="5" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div5}</div> 
            <div name="6" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div6}</div> 

            <div name="7" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div7}</div> 
            <div name="8" style={{color:"red",borderRadius="25px"}}className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div8}</div> 
            <div name="9" style={{color:"red",borderRadius="25px"}} className="btn btn-outline-primary col-3" onClick={handleClick}>{divs.div9}</div> 
            

        </div>
    )
}