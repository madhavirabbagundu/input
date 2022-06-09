import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import { v4 as uuid } from 'uuid';

function Grocery(){
    const [data,setData] = React.useState([]);
    console.log(data.length)
    // if(data.length>3){
    //     data.length = 0;
    // }
    const handleAdd = (title)=>{
        const payload ={
            title,
            status:true,
            id:uuid()
        };
        setData([...data,payload]);
    }

    const handleDelete = (id)=> {
        const updateData = data.filter((item)=>item.id!==id);
        setData(updateData)


    }
    return(
        <div>
        {/* <h2>Grocery</h2> */}
        <GroceryInput handleAdd={handleAdd}/>
        
        {data.map((item)=>(
        <GroceryList {...item} key = {item.id}
        handleDelete={handleDelete}
        />
        ))}
        </div>
    )

}
export { Grocery}