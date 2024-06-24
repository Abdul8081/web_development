import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const[text, setText] = useState('');
  const[name, setName] = useState('love');
 // variation done ->it will run on each render
  // useEffect(() =>{
  //   console.log("UI rendering done");
  // });


  //variation 2 ->First render
  // useEffect( ()=>{
  //   console.log("UI is rendering")
  // },[]);

  // third variation ->first render + dependencies change
  // useEffect( ()=>{
  //   console.log("Change observed");
  // }, [name]);

  //fourth variation -> to handle unmounting of a component
  useEffect( ()=> {
    // add event listner
    // aur ye below line after the return statement run hoga
    console.log("listener added");

    // yaha prr pahle return wala execute hoga 
    return () => {
      console.log("listner remove");
    }
  },[text]);
  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);

  }
   return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
