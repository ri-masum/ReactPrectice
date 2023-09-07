// export default function Two({task,isDone}){

//    return <li className="li">task: {task}</li>

// }

// export default function Two({task,isDone}){

//     if(isDone){
//         return <li className="li">Finished: {task}</li>

//     }
//    return <li className="li">Work On: {task}</li>

// }

// using ternary operator
// export default function Two({task,isDone}){

//   return (
//     <li>{isDone? 'Finished':'WorkingOn' }:{task}</li>
//   )
// }

// if true only
// export default function Two({task,isDone}){

//     return (
//       <li>{task} {isDone && ': Done'}</li>
//     )
//   }

// if false only

// export default function Two({task,isDone}){

//     return (
//       <li>{task} {isDone || ': Do it'}</li>
//     )
//   }

export default function Two({ task, isDone }) {
    let listItem;
  if (isDone) {
    listItem= <li className="li">Finished: {task}</li>;
  }
 else{
    listItem= <li className="li">Work On: {task}</li>;
 }
 return listItem

}

// Conditional rendaring options
