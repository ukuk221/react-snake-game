import { VFC } from 'react';
// Components
import Button from '../atoms/Button';

/**
 *
 * 十字キー用コンポーネント
 *
 */
const ControlKeys: VFC = () => (
  <div className="">
    <Button text="←" />
    <Button text="↑" />
    <Button text="↓" />
    <Button text="→" />
  </div>
);

export default ControlKeys;
