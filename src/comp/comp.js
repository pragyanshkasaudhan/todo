import { useState } from "react"
import React from 'react'

const Comp = () => {

    const [inputdata, setInputdata] = useState('');
    const [listitems, setListitems] = useState([]);
    const [taskclass, setTaskclass] = useState('eachTask');

  function addText() {
    if (!inputdata) {
        console.log("Enter Value");
    } else {
        setListitems([...listitems, inputdata]);
        setInputdata("");
    }

  }
  function deleteItems(id) {
    const temp = listitems.filter((elem, ind) => {
        return ind !== id

    });
    setListitems(temp);    
  }

  function completeItem(id) {
    console.log(id);
    setTaskclass('comptask');
  }
  


return (
   <>
   <div className="main">
      <div className="inputbox">
            <input type="text" placeholder="Type something....." className="text-box" value={inputdata} onChange={(e) => setInputdata(e.target.value)} />
            <button className="addText" onClick={addText} >ADD</button>
      </div>
        
    </div>
    <div className="displaybox">
        {listitems.map((elem, ind) => {
            return(
                <div className={taskclass} key={ind}>
                    <i class="fa-regular fa-circle-check" onClick={() => completeItem(ind)} />
                    <span>{elem}</span>
                    <i class="fa-sharp fa-solid fa-trash del" onClick={() => deleteItems(ind)}/> 
                </div>
                
                )
            })       
        }
    </div>
   </>
)}

export default Comp