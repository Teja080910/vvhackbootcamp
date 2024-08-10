import { useState } from "react"

export const Events=()=>{

    const [name,setName]=useState()

    const ChangeName=()=>{
        // setName("Darlings")
        alert("Darlings")
       console.log("working ok")
    }
    
    return(
        <div>
            <h1>Hello : {name}</h1>
            <button onClick={()=>ChangeName()}>onClick</button>
            <br/>
            <br/>
            <button onClickCapture={()=>ChangeName()}>onClickCapture</button>
            <br/>
            <br/>
            <button onDoubleClick={()=>ChangeName()}>onDoubleClick</button>
            <br/>
            <br/>
            <button onMouseOver={()=>ChangeName()}>onMouseOver</button>
            <br/>
            <br/>
            <button onMouseDown={()=>ChangeName()}>onMouseDown</button>
            <br/>
            <br/>
            <button onMouseLeave={()=>ChangeName()}>onMouseLeave</button>
            <br/>
            <br/>
            <button onMouseUp={()=>ChangeName()}>onMouseUp</button>
            <br/>
            <br/>

        </div>
    )
}