import React from 'react'
// const Child = ({count}) =><h1>{count}</h1>
const Child = ({count})=><h1>{count}</h1>
export function ParentToChild(){
    const[count,setCount] = React.useState(0);
    return(
        <>
          <h1>parentToChild</h1>
          {/* <h1>{count}</h1> */}
          <Child count={count}></Child>
          <button onClick = {()=>setCount(count+1)}>+</button>
         <button onClick = {()=>setCount(count-1)}>-</button>

        </>
    )

}