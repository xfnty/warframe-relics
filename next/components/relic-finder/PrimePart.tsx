import { useMemo, VFC } from 'react';
import { TypePrimePart } from '../../hooks/relic-finder/use-onoff-table';
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
          <td className="border-1-gray w-[20vw] p-1 sm:w-44">{part.name}</td>
          <td className="border-1-gray p-1">{relics}</td>
        </tr>
      </>
    );
  }, [part.name, part.relics]);

export default PrimePart;
