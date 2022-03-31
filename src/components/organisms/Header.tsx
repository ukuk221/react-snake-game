import { VFC } from 'react';
// Components
import DisplayInfomation from './DisplayInfomation';

const Header: VFC = () => (
  <div className="flex flex-col items-center">
    {/* タイトル */}
    <p className="text-2xl font-bold">React Snake Game</p>

    {/* ゲーム情報 */}
    <DisplayInfomation />
  </div>
);

export default Header;
