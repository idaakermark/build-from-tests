import PokemonInput from '../components/PokemonInputfield'
import { useState } from 'react';

const PokemonVote = () => {
  const [votes, setVotes] = useState({
    bulbasaur: 0,
    charmander: 0,
    squirtle: 0,
  });

  const [names, setNames] = useState({
    bulbasaur: 'Bulbasaur',
    charmander: 'Charmander',
    squirtle: 'Squirtle',
  });

  const handleVote = (pokemon) => {
    setVotes((prevVotes) => ({ ...prevVotes, [pokemon]: prevVotes[pokemon] + 1 }));
  };

  const handleNameChange = (pokemon, newName) => {
    setNames((prevNames) => ({ ...prevNames, [pokemon]: newName }));
  };

  const findWinner = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter((pokemon) => votes[pokemon] === maxVotes);
    return winners.join(' and ');
  };

  return (
    <div className='text-center'>
      <h2 className='text-red-900 font-bold text-lg'>{`Winner: ${findWinner()}`}</h2>
      {Object.keys(votes).map((pokemon) => (
        <div className='md:p-6 p-5' key={pokemon}>
          <h3 className='text-lg text-blue-900 font-bold'>{names[pokemon]}</h3>
          <PokemonInput
            placeholder={`Enter new ${names[pokemon]} name`}
            onNameChange={(newName) => handleNameChange(pokemon, newName)}
            dataTestId={`${pokemon}-input`}
          />
          <button className='border-solid border-red-600 border-2 rounded-full p-1 mt-1 text-red-900 font-bold hover:border-blue-900 hover:text-blue-900' 
          onClick={() => handleVote(pokemon)}>{`Vote ${names[pokemon]}`}</button>
          <p data-testid={`${pokemon}-vote`}> {`Votes: ${votes[pokemon]}`}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonVote;