import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // handlinf with the single function
  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   setLastName(event.target.value);
  // }

  // handling multiple state with te object method
  const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"",
     comments:"", isVisible:true, mode:"", favCar:""});
  console.log(formData);

  function changeHandler (event) {
    const {name, value, checked, type} = event.target;
    // new state me value put kar deta hai
    // is se sare ke value ko updated rakhenge
    setFormData(prevFormData => { 
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print , we can send this data also 
    console.log("finally printing the entireform ka data....");
    console.log(formData);

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
        type="text" placeholder='first name'
        onChange={changeHandler}
        name="firstName"
        // valu se state ko bhi maintain karte huwe chal raha hai
        value={formData.firstName}
      />

        <br/>
        <br/>

      <input 
        type="text" placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
      />
  
      <br/>
      <br/> 
      
      <input 
        type="email" placeholder="enter your email here"
        onChange={changeHandler}
        name='email'
        value={formData.email}
      />

      <br/>
      <br/>

      <textarea
        placeholder='enter your comments here '
        onChange={changeHandler}
        name='comments'
        value={formData.comments}

      />
      <br/>
      <br/>

      <input
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        // yaha prr checked name ka keyword use karte hai
        checked={formData.isVisible}
      />
      <label htmlFor='isVisible'>Am I Visible</label>

      <br/>
      <br/>
      
      <fieldset>
        {/* for the addig of the a nale to the field set
       we use legend */}
        <legend>Mode:</legend>

        {/* this is for the grouping of the form 
        to the particular container */}
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Online Mode"
        id='Online Mode'
        checked={formData.mode=== "Online Mode"}
        />
        <label htmlFor='Online Mode'>Online Mode</label>

        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Offline Mode"
        id='Offline Mode'
        checked={formData.mode === "Offline Mode"}
        />
        <label htmlFor='Offline Mode'>Offline Mode</label>
        
      </fieldset>

      <label htmlFor='favCar'>Tell me your favorite car : </label>
      <select
        onChange={changeHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}
        
        >
        <option value="scarpio">Scarpio</option>
        <option value="fortunre">Fortunre</option>
        <option value="maruti">Maruti</option>
        <option value="scarpio">Scarpio</option>
        <option value="scarpio">Scarpio</option>

        </select>

      {/* <input type='submit' value='submit'></input> */}

      <br/>
      <br/>

      <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
