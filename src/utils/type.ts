import { DIRECTIONS, FIELD_ITEM_KINDS } from './const';

// 蛇の進む方向
export type DirectionsType = typeof DIRECTIONS[keyof typeof DIRECTIONS];

// マスの種別
export type FieldItemKindType = typeof FIELD_ITEM_KINDS[keyof typeof FIELD_ITEM_KINDS];
