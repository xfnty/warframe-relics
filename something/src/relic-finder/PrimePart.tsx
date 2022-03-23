import { useMemo, VFC } from 'react';

import { TypePrimePart } from './hooks/use-onoff-table';
import Relic from './Relic';

type Props = {
  part: TypePrimePart;
};

const PrimePart: VFC<Props> = ({ part }): JSX.Element =>
  useMemo(() => {
    let tmp: JSX.Element[] = [];
    part.relics.forEach((value) => {
      tmp.push(<Relic key={value.name} relic={value} />);
    });
    const relics = tmp;

    // console.log(`[${part.name}] part render`);
    return (
      <>
        <tr>
          <td className="table__data--parts-name">{part.name}</td>
          <td className="table__data">{relics}</td>
        </tr>
      </>
    );
  }, [part.name, part.relics]);

export default PrimePart;
