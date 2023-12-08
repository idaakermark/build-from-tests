const CalculateWinner = ({ bulbasaurVote = 0, charmanderVote = 0, squirtleVote = 0 }) => {
    const maxVotes = Math.max(bulbasaurVote, charmanderVote, squirtleVote);
  
    if (maxVotes === 0) {
      return <h2>Start voting!</h2>;
    }
  
    const winners = [];
    if (bulbasaurVote === maxVotes) {
      winners.push('Bulbasaur');
    }
    if (charmanderVote === maxVotes) {
      winners.push('Charmander');
    }
    if (squirtleVote === maxVotes) {
      winners.push('Squirtle');
    }
  
    if (winners.length === 1) {
      return (
        <h2>
          {winners[0]} is in the lead with {maxVotes} vote{maxVotes !== 1 ? 's' : ''}!
        </h2>
      );
    } else {
      const joinedWinners = winners.join(' and ');
      return (
        <h2>
          It's a tie between {joinedWinners} with {maxVotes} vote{maxVotes !== 1 ? 's' : ''} each!
        </h2>
      );
    }
  };
  
  export default CalculateWinner;
