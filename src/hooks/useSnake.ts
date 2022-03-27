import { useState, useEffect, useRef } from 'react';
// Const
import { DEFAULT_GRID_SIZE, DIRECTIONS } from '../const';
// Types
import { HeadPosType, DirectionsType } from '../type';

export const useSnake = (): {
  bodyIndexes: (number | null)[];
  snakeHeadIndex: number | null;
  fruitIndex: number;
  isGameover: boolean;
} => {
  const gridSize = DEFAULT_GRID_SIZE;
  const { UP, DOWN, LEFT, RIGHT } = DIRECTIONS;

  const [fruitIndex, setFruitIndex] = useState<number>(Math.floor(Math.random() * gridSize * gridSize));

  const [headPos, setHeadPos] = useState<HeadPosType>({ x: 1, y: 3 });

  const [bodyIndexes, setBodyIndexes] = useState<(number | null)[]>([30]);

  const [direction, setDirection] = useState<DirectionsType>('→');
  const [speed] = useState<number>(400);

  const isFrameout = headPos.x < 0 || gridSize <= headPos.x || headPos.y < 0 || gridSize <= headPos.y;

  const snakeHeadIndex = !isFrameout ? headPos.y * gridSize + headPos.x : null;
  const isEatingFruit = snakeHeadIndex === fruitIndex;
  // const isSuicided = bodyIndexes.includes(snakeHeadIndex);
  // const isGameover = isFrameout || isSuicided;
  const isGameover = isFrameout;

  const growUpSnake = () => {
    setBodyIndexes((preBodyIndexes) =>
      (() => {
        preBodyIndexes.unshift(preBodyIndexes[0]);

        return preBodyIndexes;
      })()
    );
  };

  const directionRef = useRef<DirectionsType>(direction);
  directionRef.current = direction;

  const forwardSnake = () => {
    setBodyIndexes((preBodyIndexes) =>
      ((body, head) => {
        body.shift();
        body.push(head);

        return body;
      })(preBodyIndexes, snakeHeadIndex)
    );
    switch (directionRef.current) {
      case LEFT:
        setHeadPos((preHeadPos) => ({ ...preHeadPos, x: preHeadPos.x - 1 }));
        break;
      case UP:
        setHeadPos((preHeadPos) => ({ ...preHeadPos, y: preHeadPos.y - 1 }));
        break;
      case RIGHT:
        setHeadPos((preHeadPos) => ({ ...preHeadPos, x: preHeadPos.x + 1 }));
        break;
      case DOWN:
        setHeadPos((preHeadPos) => ({ ...preHeadPos, y: preHeadPos.y + 1 }));
        break;
      default:
        // eslint-disable-next-line no-case-declarations
        const unknownEvent: never = directionRef.current;
        // eslint-disable-next-line
        throw new Error(`Unknown event: ${unknownEvent}`);
    }
  };

  const timeGoes = () => {
    if (!isGameover) {
      forwardSnake();
    }
  };

  useEffect(() => {
    const id = setTimeout(timeGoes, speed);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, isGameover, headPos, directionRef]);

  useEffect(() => {
    if (isEatingFruit) {
      growUpSnake();
      setFruitIndex(Math.floor(Math.random() * gridSize * gridSize));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEatingFruit]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft': // 「←」キーが押された
          setDirection(LEFT);
          break;
        case 'ArrowUp': // 「↑」キーが押された
          setDirection(UP);
          break;
        case 'ArrowRight': // 「→」キーが押された
          setDirection(RIGHT);
          break;
        case 'ArrowDown': // 「↓」キーが押された
          setDirection(DOWN);
          break;
        default:
          // eslint-disable-next-line
          throw new Error('Unknown event');
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return {
    bodyIndexes,
    snakeHeadIndex,
    fruitIndex,
    isGameover,
  };
};

export default useSnake;
