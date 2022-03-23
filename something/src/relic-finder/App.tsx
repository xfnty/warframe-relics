import '../../css/relic-finder/main.scss';

import { useState, VFC } from 'react';

import data from '../../assets/prime.json';
import Head from './Head';
import useOnOffTable, { TypePrimeItem } from './hooks/use-onoff-table';
import PrimeTable from './PrimeTable';
import Search from './Search';
import ToggleButton from './ToggleButton';

const TABLES: TypePrimeItem[] = data.tables;

const App: VFC = () => {
  // ボタンを表示したり消したりするやつ
  const [isShow, setIsShow] = useState<boolean>(false);

  // PrimeItemのボタンとテーブル関連の処理
  const [onOffTable, setOnOff, handleChangeKeyword] = useOnOffTable(TABLES);

  let tmpButtons: JSX.Element[] = [];
  let tmpTables: JSX.Element[] = [];
  TABLES.forEach((value) => {
    tmpButtons.push(
      <ToggleButton
        key={`button_${value.name}`}
        name={value.name}
        onOff={onOffTable[value.name]}
        setOnOff={setOnOff}
      />,
    );

    tmpTables.push(
      <PrimeTable
        key={`table_${value.name}`}
        item={value}
        onOff={onOffTable[value.name]}
      />,
    );
  });

  const buttons: JSX.Element[] = tmpButtons;
  const primeTables: JSX.Element[] = tmpTables;

  return (
    <>
      <Head />

      <div className="main">
        <div className="main__section">
          <p className="main__update-date">{data.updateDate}</p>
        </div>
        <div className="main__section">
          <h2 className="main__title">Warframe Relic Finder</h2>
        </div>
        <div className="main__section">
          <Search handleChangeKeyword={handleChangeKeyword} />
        </div>
        <div className="main__section">
          <input
            className="main__input--button-show"
            type="button"
            value={isShow ? 'Hide buttons' : 'Show buttons'}
            onClick={() => setIsShow((prev) => !prev)}
          />
        </div>
        <div className={`buttons ${isShow ? 'buttons__show' : ''}`}>
          {buttons}
        </div>
        <div className="main__section">{primeTables}</div>
      </div>
    </>
  );
};

export { App };
