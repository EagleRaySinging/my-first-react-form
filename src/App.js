import { useState } from 'react';
import './App.css';




function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function onClick(e) {
    e.preventDefault()
    const name = e.target.parentElement.previousElementSibling.children[1].value
    const email = e.target.parentElement.previousElementSibling.children[3].value
    setName(name)
    setEmail(email)
  }


  return (
   <>
   <div className="panel">
    <h1>My First React Form</h1>
    <div className="info">
      <label for="">Name:</label>
      <input type="text"></input>
      <label for="">Email:</label>
      <input type="email"></input>
    </div>
    <div className="submit">
      <button className="submit-btn" onClick={onClick}>Submit</button>
    </div>
    <div className="show-info">
      <h4>{name}</h4>
      <h4>{email}</h4>
    </div>
   </div>
   </>
  );
}

export default App;
