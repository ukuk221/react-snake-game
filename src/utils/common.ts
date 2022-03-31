/**
 *
 * 汎用関数用ファイル
 *
 */

export const common = (): {
  initFields: (size: number) => string[][];
} => {
  const initFields = (size: number) => {
    const fields = [];
    for (let i = 0; i < size; i++) {
      const cols = new Array(size).fill('');
      fields.push(cols);
    }

    // test
    fields[17][17] = 'snake';
    fields[20][20] = 'fruits';

    return fields;
  };

  return {
    initFields,
  };
};

export default common;
