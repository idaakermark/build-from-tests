import UserInput from './components/UserInput'; 
import PokemonVote from './components/PokemonVote';
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [userInputDisplay, setUserInputDisplay] = useState('');

  const handleUserInputChange = (value) => {
    setUserInput(value);
  };

  return (
    <div className='ml-2 mr-2'>
      <Header />
      <body className='h-screen'>
        <UserInput onSubmit={handleUserInputChange} />
        {userInputDisplay && (
          <div data-testid='user-input-display'>{userInputDisplay}</div>
        )}
        <PokemonVote />
      </body>
      <Footer />
    </div>
  );
};

export default App;

