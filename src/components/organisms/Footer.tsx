import { VFC } from 'react';
// Components
import Button from '../atoms/Button';
import ControlKeys from './ControlKeys';

/**
 *
 * フッター用コンポーネント
 *
 */
const Footer: VFC = () => (
  <div className="flex flex-col items-center">
    <Button text="start" />
    <ControlKeys />
  </div>
);

export default Footer;
