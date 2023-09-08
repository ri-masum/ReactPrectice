import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Two from "./two";
import Actors from "./Actors";
import Singers from "./Singers";
import Counter from "./Counter";
import Users from "./Users";
import UserDetails from "./UserDetails";


function App() {
  const [count, setCount] = useState(0);

  const actors=['masum','sawrab','tusher','rayat','shrabon','ananna','julfa ','joye ','verukut']
  const singers=[
    {id:1,name:'masum ahmed',age:24},
    {id:2,name:'julfa',age:24},
    {id:3,name:'ananna',age:23},
    {id:4,name:'rika',age:22},


  ]
  
  function ClickHandler(){
    alert('wassap nigga')
   
  }
  function addToFive(n){
    alert (n+5)


  }

  return (

    <>
    
      <h1>React Core Concept </h1>
      <Users></Users>


      <Counter></Counter>
      <button onClick={ClickHandler}>click me</button>
      <button onClick={()=>{alert("hi everyone")}}>Inline button</button>
      <button onClick={()=>addToFive(10)}>click me</button>
    {/* module 39 prectice  */}








{/* {
  singers.map(singer=><Singers singer={singer}></Singers>)
} */}

      {/* <Actors name='Masum Ahmed'></Actors>
      {
        actors.map(actor=><Actors name={actor}></Actors>)
      } */}


      {/* <Two task='Learn React' isDone={false}> </Two>
      <Two task='Learn JS' isDone={true}> </Two>
      <Two task='Learn Html' isDone={true}> </Two>
      <Two task='Learn CSS' isDone={true}> </Two>
      <Two task='Learn NodeJS' isDone={true}> </Two> */}



      {/* <Device name='laptop' price="55k"></Device>
      <Device name='mobile' brand='IOS'></Device>
      <Device name='watch'></Device>
      <Device name='skateboard'></Device> 
      <Person></Person>
      <Person></Person>
      <Person></Person> 
      <Student grade="10th" score="90"></Student>
      <Student grade="11th" score="20"></Student>
      <Student grade="9th" score="40"></Student>
      <Student grade="4th" score="80"></Student>
      <Student ></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props){
  console.log(props);
  return <div>

    <h2>This is a :{props.name}</h2>
  </div>
}

 
function Person() {
  const person = { name: "masum", age: 24 };
  return (
    <h4>
      my name is {person.name} and age is {person.age}
    </h4>
  );
}

// const {grade ,score}={grade:'10th',score:'90'}

function Student({grade=0,score=0}) {
  return (
    <div className="student">
      <h3>Students details</h3>
      <p>Grade:{grade}</p>
      <p>score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle={
      margin:'20px',
      padding: '20px',
      border:'2px solid red',
      borderRadius:'10px'
  }
  return <div style={developerStyle}>
    <h5>Dev Masum</h5>
    <p>Coding:</p>

     
  </div>;
}
export default App;
