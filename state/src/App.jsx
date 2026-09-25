import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function Person() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [age, setAge] = useState(100);

  const fullName = firstName + " " + lastName;

  const handleIncreaseAge = () => {
    setPerson(age + 1);
  };

  function handleFirstNameChange(e){
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e){
    setLastName(e.target.value);
  }

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <label for="firstNameInput">First name: </label> <input id="firstNameInput" onChange={handleFirstNameChange} value={firstName} />
      <label for="lastNameInput">Last name: </label> <input id="lastNameInput" onChange={handleLastNameChange} value={lastName}/>
    </>
  );
}


function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [numChanges, setNumChanges] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setNumChanges(numChanges + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>There have been {numChanges} changes to the background color.</h2>
      
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export { App, Person };
