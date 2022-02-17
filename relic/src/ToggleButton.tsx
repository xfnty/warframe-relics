import { useMemo, VFC } from 'react';

type Props = {
  name: string;
  onOff: boolean;
  setOnOff: (key: string) => void;
};

const ToggleButton: VFC<Props> = ({ name, onOff, setOnOff }): JSX.Element =>
  useMemo(() => {
    console.log(`[${name}] button render`);
    return (
      <button
        className={`main__input--button-prime ${
          onOff ? 'main__input--button-selected' : ''
        }`}
        onClick={() => {
          setOnOff(name);
        }}
      >
        {name}
      </button>
    );
  }, [name, onOff, setOnOff]);

export default ToggleButton;
