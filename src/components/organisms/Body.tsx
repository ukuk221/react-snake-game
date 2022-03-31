import { FC } from 'react';
// library
/**
 * style
 */
// const BodyS = styled.main`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const MapS = styled.div`
//   --grid-size: 10; /* 10 x 10 マス（CSS変数） */
//   display: grid;
//   grid-template-columns: repeat(var(--grid-size), 30px); /* 10列 幅30px */
//   grid-template-rows: repeat(var(--grid-size), 30px); /* 10行 高さ30px */
//   margin-bottom: 1.5rem;
// `;

// const CellS = styled.div`
//   border: 1px solid white;
//   background: whitesmoke;

//   /* ヘビの体の色 */
//   &.body {
//     background: #008000;
//   }

//   /* フルーツの色 */
//   &.fruit {
//     background: orangered;
//   }

//   /* ヘビの頭の色 */
//   &.head {
//     background: #006400;
//   }
// `;

const Body: FC = () => (
  //   <BodyS>
  //     <MapS>
  //       {Array.from({ length: DEFAULT_GRID_SIZE * DEFAULT_GRID_SIZE }, (_, i) => i).map((v) => (
  //         <CellS
  //           /* eslint-disable no-nested-ternary */
  //           className={snakeHeadIndex === v ? 'head' : bodyIndexes.includes(v) ? 'body' : fruitIndex === v ? 'fruit' : ''}
  //           /* eslint-enable no-nested-ternary */
  //         />
  //       ))}
  //     </MapS>
  //     </BodyS>
  <div>p</div>
);

export default Body;
