import React from 'react';

import './App.css';
// import { ChildParent } from './Components/ChildToParent';
import { Grocery } from './Components/Grocery';

// import { ParentToChild } from './Components/ParentToChild';
// import { SibToSib } from './Components/SibToSib';

function App() {
  return (
    <div className="App">
     {/* <ParentToChild/> */}
     {/* <ChildParent/> */}
     {/* <SibToSib/> */}
     <Grocery/>
    </div>
  );
}

export default App;
