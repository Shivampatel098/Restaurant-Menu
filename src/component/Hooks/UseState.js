import React, {useState} from 'react';

const UserForm = () => {
    const [fName, setfName]=useState("Patel");
    const [age, setAge]=useState(20);
  return (
    <>
    <div>
        <input value={fName} onChange={e => setfName(e.target.value)}></input>
        <button onClick={() => setAge(age + 1)}>Increment Age</button>
        <p>Hello, {fName}. your Age is {age}.</p>
    </div>
    </>
    
  );
}

export default UserForm;