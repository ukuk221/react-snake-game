import { VFC } from 'react';
// CSS
import './App.css';
// style
import styled from 'styled-components';
// hooks
import { useSnake } from './hooks/useSnake';
// const
import { DEFAULT_GRID_SIZE } from './const';

/**
 *
 * style
 *
 */
const MainS = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
`;

const ContentS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapS = styled.div`
  --grid-size: 10; /* 10 x 10 マス（CSS変数） */
  display: grid;
  grid-template-columns: repeat(var(--grid-size), 30px); /* 10列 幅30px */
  grid-template-rows: repeat(var(--grid-size), 30px); /* 10行 高さ30px */
`;

const CellS = styled.div`
  border: 1px solid white;
  background: whitesmoke;

  /* ヘビの体の色 */
  &.body {
    background: #008000;
  }

  /* フルーツの色 */
  &.fruit {
    background: orangered;
  }

  /* ヘビの頭の色 */
  &.head {
    background: #006400;
  }
`;

const App: VFC = function () {
  // const App: VFC = () => {

  const { bodyIndexes, snakeHeadIndex, fruitIndex, isGameover } = useSnake();

  return (
    <MainS>
      <ContentS>
        <p>SCORE: {bodyIndexes.length - 1}</p>
        <MapS>
          {Array.from({ length: DEFAULT_GRID_SIZE * DEFAULT_GRID_SIZE }, (_, i) => i).map((v) => (
            <CellS
              /* eslint-disable no-nested-ternary */
              className={
                snakeHeadIndex === v ? 'head' : bodyIndexes.includes(v) ? 'body' : fruitIndex === v ? 'fruit' : ''
              }
              /* eslint-enable no-nested-ternary */
            />
          ))}
        </MapS>
        {isGameover && (
          <p>
            Gameover
            <br />
            <button type="button" onClick={() => window.location.reload()}>
              RETRY
            </button>
          </p>
        )}
      </ContentS>
    </MainS>
  );
};

export default App;
