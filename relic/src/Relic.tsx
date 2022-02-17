import { useMemo, VFC } from 'react';

import { TypeRelic } from './hooks/use-onoff-table';

type Props = {
  relic: TypeRelic;
};

const Relic: VFC<Props> = ({ relic }): JSX.Element =>
  useMemo(() => {
    // console.log(`[${relic.name}] relic render`);
    return (
      <span
        className={`relic ${relic.rarity} ${relic.isInVault ? 'isInVault' : ''}`}
      >
        {relic.name}
      </span>
    );
  }, [relic.name, relic.rarity, relic.isInVault]);

export default Relic;
