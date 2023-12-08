import { useState } from "react";

const UserInput = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(inputValue);
      setSubmitted(true);
    };
  
    return (
      <div className='text-center pb-4'>
        <form onSubmit={handleSubmit}>
          <input className='border-solid border-2 rounded-md p-1'
            type='text'
            placeholder='Enter your name'
            value={inputValue}
            onChange={handleChange}
          />
          <button className='border-solid border-2 rounded-md p-1 hover:border-gray-400'type='submit'>Submit</button>
        </form>
        {submitted && <p>Welcome, {inputValue}!</p>}
      </div>
    );
  };
  
  export default UserInput;