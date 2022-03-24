import { useMemo, VFC } from 'react';

type Props = {
  name: string;
  onOff: boolean;
  setOnOff: (key: string) => void;
};

const ToggleButton: VFC<Props> = ({ name, onOff, setOnOff }): JSX.Element =>
  useMemo(() => {
    // console.log(`[${name}] button render`);
    return (
      <button
        className={`border-1-gray mr-2 mb-1 rounded px-1 text-sm ${
          onOff ? 'bg-[#C09B0F]' : ''
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
