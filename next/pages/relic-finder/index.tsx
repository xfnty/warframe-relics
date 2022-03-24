import { useState } from 'react';
import data from '../../assets/prime.json';
import Layout from '../../components/Layout';
import PrimeTable from '../../components/relic-finder/PrimeTable';
import Search from '../../components/relic-finder/Search';
import ToggleButton from '../../components/relic-finder/ToggleButton';
import Seo from '../../components/Seo';
import useOnOffTable, {
  TypePrimeItem,
} from '../../hooks/relic-finder/use-onoff-table';

const TABLES: TypePrimeItem[] = data.tables;

const RelicFinder = () => {
  const title = 'Warframe Relic Finder';
  const description =
    'You can find relics from prime items.プライムアイテム入手に必要なレリックを探せます。';
  const url = 'https://kusobako.github.io/warframe/relic-finder';
  const imageUrl = 'https://i.imgur.com/8GImVpk.png';

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
    <Layout>
      <>
        <Seo
          pageTitle={title}
          pageDescription={description}
          pagePath={url}
          pageImg={imageUrl}
        />

        <main className="p-2 sm:p-3">
          <p className="mb-2 text-xs">{data.updateDate}</p>
          <h1 className="mb-3 text-lg font-bold sm:text-2xl">{title}</h1>

          <div className="mb-3">
            <Search handleChangeKeyword={handleChangeKeyword} />
          </div>

          <div className="mb-3">
            <input
              className="border-1-gray hidden w-36 cursor-pointer rounded py-1 text-sm sm:inline"
              type="button"
              value={isShow ? 'Hide buttons' : 'Show buttons'}
              onClick={() => setIsShow((prev) => !prev)}
            />
          </div>

          <div className={`hidden ${isShow ? 'sm:inline' : ''}`}>{buttons}</div>
          <div>{primeTables}</div>
        </main>
      </>
    </Layout>
  );
};

export default RelicFinder;
