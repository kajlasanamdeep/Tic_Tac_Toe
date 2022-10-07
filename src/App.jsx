import React from 'react';
import './App.css';
import Box from './components/Box';
import Title from './components/Title';

function App() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [winner, setWinner] = React.useState(null);
  const [current, setCurrent] = React.useState('X');
  const [line, setLine] = React.useState([]);

  const handleClick = (i) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (!board[i] && !!!winner) {
      let squares = board.map((value, index) => i === index ? current : value);
      setBoard(squares);
      let line = lines.find(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
      if (line) {
        setLine(line);
        setWinner(current);
        return;
      }
      setCurrent(current === 'X' ? 'O' : 'X');
      return;
    }
    return;
  };

  const ResetHandler = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setLine([]);
  }

  return (
    <React.Fragment>
      <Title text={"Tic Tac Toe"} />
      <div className="board">
        {
          board.map((value, index) =>
            <Box key={index} outline={line.includes(index)} value={value} onClick={() => handleClick(index)} />
          )
        }
      </div>
      <div className='game-info'>
      <span className='info'>{!!winner ? `${winner} is Winner!`: !board.includes(null) ? 'Match drawn!' : `Current Turn : ${current}`}</span>
      <button className='reset-btn' onClick={ResetHandler}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;