import React from'react'

const Child = ({count,handleIncrement,handleDecrement})=>{
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

        </div>
    );
};
function ChildParent(){
    const[count,setCount] = React.useState(0);

    const handleChange=(val)=>{
        setCount(count+val);
    };
return(
  <div>
  <h1>childToParent</h1>
  <Child 
  count={count}
  handleIncrement = {() => handleChange(1)}
  handleDecrement = {() =>handleChange(-1)}
  />
  
 
  </div>
)
}
export {ChildParent}