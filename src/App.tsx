import { VFC } from 'react';
// CSS
import './App.css';
// hooks
import { useSnake } from './hooks/useSnake';
// const
import { DEFAULT_GRID_SIZE } from './const';

const App: VFC = function () {
  // const App: VFC = () => {

  const { bodyIndexes, snakeHeadIndex, fruitIndex, isGameover } = useSnake();

  return (
    <div>
      <p>SCORE: {bodyIndexes.length - 1}</p>
      <div id="map">
        {Array.from({ length: DEFAULT_GRID_SIZE * DEFAULT_GRID_SIZE }, (_, i) => i).map((v) => (
          <div
            className={`cell ${snakeHeadIndex === v ? 'head' : ''} ${bodyIndexes.includes(v) ? 'body' : ''} ${
              fruitIndex === v ? 'fruit' : ''
            }`}
          />
        ))}
      </div>
      {isGameover && (
        <p>
          Gameover
          <br />
          <button type="button" onClick={() => window.location.reload()}>
            RETRY
          </button>
        </p>
      )}
    </div>
  );
};

export default App;
