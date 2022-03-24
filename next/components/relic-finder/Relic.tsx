import { useMemo, VFC } from 'react';

import { TypeRelic } from '../../hooks/relic-finder/use-onoff-table';

type Props = {
  relic: TypeRelic;
};

const Relic: VFC<Props> = ({ relic }): JSX.Element =>
  useMemo(() => {
    // console.log(`[${relic.name}] relic render`);
    let color = '';
    switch (relic.rarity) {
      case 'C':
        color = 'text-[#C47222]';
        break;
      case 'UC':
        color = 'text-[#C0C0C0]';
        break;
      case 'R':
        color = 'text-[#C09B0F]';
        break;
      default:
        break;
    }

    return (
      <span
        className={`inline-block w-20 py-[3px] px-[6px] text-center ${color} ${
          relic.isInVault ? 'opacity-40' : 'font-bold'
        }`}
      >
        {relic.name}
      </span>
    );
  }, [relic.name, relic.rarity, relic.isInVault]);

export default Relic;
