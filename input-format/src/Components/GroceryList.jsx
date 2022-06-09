import React from 'react'
const GroceryList=({title,status,id,handleDelete})=>{
    return(
        
      <div><h2 style ={{color:"red"}}>{title}</h2>
      {/* <h2>{id}</h2> */}
      {/* <h2>{status?"true":"false"}</h2> */}
      <button onClick = {()=> handleDelete(id)}>handleDelete</button>
      </div>
       
    )

}
export { GroceryList }