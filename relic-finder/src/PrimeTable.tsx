import '../css/prime-table.scss';

import PrimePart from 'PrimePart';
import { useMemo, VFC } from 'react';

import { TypePrimeItem } from './hooks/use-onoff-table';

type Props = {
  item: TypePrimeItem;
  onOff: boolean;
};

const PrimeTable: VFC<Props> = ({ item, onOff }): JSX.Element =>
  useMemo(() => {
    let tmp: JSX.Element[] = [];
    item.parts.forEach((value) => {
      tmp.push(<PrimePart key={value.name} part={value} />);
    });
    const primeParts = tmp;

    // console.log(`[${item.name}] table render`);
    return (
      <table className={`table ${onOff ? 'table__selected' : ''}`}>
        <thead>
          <tr>
            <th className="table__header" colSpan={2}>
              {item.name} Prime
            </th>
          </tr>
        </thead>
        <tbody>{primeParts}</tbody>
      </table>
    );
  }, [item.parts, item.name, onOff]);

export default PrimeTable;
