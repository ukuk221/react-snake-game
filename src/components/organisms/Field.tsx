import { VFC } from 'react';
// Utils
import { FIELD_ITEM_KINDS } from '../../utils/const';

const { NONE, SNAKE, FRUITS } = FIELD_ITEM_KINDS;

const Field: VFC<{ fields: string[][] }> = (props) => {
  const { fields } = props;

  return (
    <div className="field">
      {fields.map((row) =>
        row.map((column) => (
          <>
            {/* マスの種別によってstyle切替 */}
            {column === NONE && <div className="bg-black" />}
            {column === SNAKE && <div className="bg-green-500" />}
            {column === FRUITS && <div className="bg-orange-300" />}
          </>
        ))
      )}
    </div>
  );
};

export default Field;
