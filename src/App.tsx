import { VFC } from 'react';
// CSS
import './App.css';
// library
// components
import Header from './components/organisms/Header';
import Body from './components/organisms/Body';
import Footer from './components/organisms/Footer';
// hooks
import { useSnake } from './hooks/useSnake';
// const
import { DEFAULT_GRID_SIZE } from './const';

/**
 *
 * style
 *
 */
// const ContentS = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #000000;
//   color: #ffffff;
// `;

const App: VFC = () => {
  const { bodyIndexes, snakeHeadIndex, fruitIndex, isGameover, onKeyDownSp } = useSnake();

  return (
    <div>
      <Header />

      <Body />

      <Footer />

      <div className="text-red-400">こんにちは</div>

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
