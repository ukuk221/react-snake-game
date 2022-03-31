export const DEFAULT_GRID_SIZE = 35 as const;

export const DIRECTIONS = {
  UP: '↑',
  DOWN: '↓',
  LEFT: '←',
  RIGHT: '→',
} as const;

export const FIELD_ITEM_KINDS = {
  NONE: '',
  SNAKE: 'snake',
  FRUITS: 'fruits',
  BOMB: 'bomb',
} as const;
