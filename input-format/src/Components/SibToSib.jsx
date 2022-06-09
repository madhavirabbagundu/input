import React from'react';


const Child = ({count})=><h1>{count}</h1>

const Button = ({text,handleClick})=>{
    return <button onClick={handleClick}>{text}</button>
}


export function SibToSib(){
    const [count,setCount] = React.useState(0)
    const handleChange=(val)=>{
        setCount(count+val)
    };

    return(
        <>
          <h1>sibling</h1>
          <Child count={count}/>
          <Button text = "-"handleClick={()=>handleChange(-1)}/>
          <Button text = "+"handleClick={()=>handleChange(1)}/>

        </>
    )
}