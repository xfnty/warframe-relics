import { useMemo, VFC } from 'react';
import { TypePrimeItem } from '../../hooks/relic-finder/use-onoff-table';
import PrimePart from './PrimePart';

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
      <table
        className={`border-1-gray mt-5 w-[100%] max-w-lg border-collapse text-sm ${
          onOff ? 'table' : 'hidden'
        }`}
      >
        <thead>
          <tr>
            <th className="border-1-gray py-3 text-lg" colSpan={2}>
              {item.name} Prime
            </th>
          </tr>
        </thead>
        <tbody>{primeParts}</tbody>
      </table>
    );
  }, [item.parts, item.name, onOff]);

export default PrimeTable;
