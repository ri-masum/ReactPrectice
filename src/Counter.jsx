// import { useState } from "react"

import { useState } from "react";

// export default function Counter(){

//     const [count,setCount]=useState(0);

//     const handleAdd=()=>{
//         const newCount=count+1;
//         setCount(newCount)

//     }
//     const handleReduce=()=>{
//         const newCount=count-1;
//         setCount(newCount);
//     }



//     return <div style={{border:'2px solid tomato',
//     padding:'50px',margin:'50px 50px'
    
//     }}>
//         <h3>Count:{count}</h3>
//         <button onClick={handleAdd} style={{marginRight:'10px'}}>Add</button>
//         <button onClick={handleReduce}>reduce</button>
//     </div>
// }


// export default function Counter(){

//     const [count,setCount]=useState(0);

//     const handleAdd=()=>{
//         const newCount=count+1;
//         setCount(newCount);
//     }

//     const handleReduce=()=>{
//         const newCount=count-1;
//         setCount(newCount)
//     }

    


//     return <div style={{border:'3px solid red ' ,padding:'20px'}}>
//         <h1>Count: {count}</h1>
//         <button onClick={handleAdd} style={{marginRight:'10px'}}>Increment</button>
//         <button onClick={handleReduce}>Decrement</button>
//     </div>
// }

export default function Counter(){
    const [count,setCount]=useState(0);


const handleAdd=()=>{
    const newCount=count+1;
    setCount(newCount)
}

    return <div>
        <h1>Count: {count}</h1>
        <button onClick={handleAdd}>add</button>
    </div>
}