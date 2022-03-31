import { VFC } from 'react';
// library

/**
 * style
 */

const Field: VFC = () => (
  <div className="field">
    {new Array(35 * 35).fill('').map(() => (
      <div className="border border-1 border-black" />
    ))}
  </div>
);

export default Field;
