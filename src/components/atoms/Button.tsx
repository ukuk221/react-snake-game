import { VFC } from 'react';

/**
 *
 * ボタン用コンポーネント
 *
 */
const Button: VFC<{ text: string }> = (props) => {
  const { text } = props;

  return <button type="button">{text}</button>;
};

export default Button;
