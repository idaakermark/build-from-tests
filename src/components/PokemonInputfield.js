import { useState } from 'react'

const PokemonInput = ({ onNameChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      onNameChange(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input className='border-solid border-2 rounded-md p-1'
        type='text'
        placeholder='Enter new name'
        value={inputValue}
        onChange={handleChange}
        data-testid='pokemon-input'
      />
      <button className='border-solid border-2 rounded-md p-1 hover:border-gray-400' 
      onClick={handleSubmit} data-testid='change-name-button'>
        Change Name
      </button>
    </div>
  );
};

export default PokemonInput;