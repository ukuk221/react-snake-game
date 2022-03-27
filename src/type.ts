import { DIRECTIONS } from './const';

export type HeadPosType = {
  x: number;
  y: number;
};

export type DirectionsType = typeof DIRECTIONS[keyof typeof DIRECTIONS];
