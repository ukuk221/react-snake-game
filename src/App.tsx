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
  margin-bottom: 1.5rem;
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

const ButtonGridS = styled.div`
  width: 73vw;
  background: #a9a9a9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 10vh);

  @media (min-width: 600px) {
    display: none;
  }
`;

const ButtonS = styled.button`
  background: #696969;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtoTopS = styled(ButtonS)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

const ButtonLeftS = styled(ButtonS)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;

const ButtonRightS = styled(ButtonS)`
  grid-row: 2 / 3;
  grid-column: 3/4;
`;

const ButtonBottomS = styled(ButtonS)`
  grid-row: 3 / 4;
  grid-column: 2/3;
`;

const ArrowS = styled.div<{ deg: string }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7vw 6vh 30px;
  border-color: transparent transparent #ffffff transparent;
  transform: ${({ deg }) => (deg ? `rotate(${deg})` : '')};
`;

const App: VFC = function () {
  // const App: VFC = () => {

  const { bodyIndexes, snakeHeadIndex, fruitIndex, isGameover, onKeyDownSp } = useSnake();

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

        <ButtonGridS>
          <ButtoTopS onClick={() => onKeyDownSp('ArrowUp')}>
            <ArrowS deg="" />
          </ButtoTopS>
          <ButtonLeftS onClick={() => onKeyDownSp('ArrowLeft')}>
            <ArrowS deg="-90deg " />
          </ButtonLeftS>
          <ButtonRightS onClick={() => onKeyDownSp('ArrowRight')}>
            <ArrowS deg="90deg" />
          </ButtonRightS>
          <ButtonBottomS onClick={() => onKeyDownSp('ArrowDown')}>
            <ArrowS deg="180deg" />
          </ButtonBottomS>
        </ButtonGridS>

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
