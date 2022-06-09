import React from 'react'
function GroceryInput({handleAdd}){
    const[title,setInput]=React.useState("")


    const output=(e)=>{
        setInput(e.target.value)
    }
    const HandleAdd = ()=>{
    handleAdd(title)
    }
    return(
        <>
     <h2>Input Data</h2>  
     <input 
     placeholder="add something"
     value = {title}
    //  onChange = {(e)=>setInput(e.target.value)}/> 
     onChange = {output}/>
     {/* <button onClick = {()=>handleAdd(title)}>ADD</button> */}
     <button onClick = {HandleAdd}>ADD</button>
        </>
    )

}
export { GroceryInput}