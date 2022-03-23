import '../../css/available-relics/main.scss';

import { Helmet } from 'react-helmet';

import data from '../../assets/relics.json';

const filterByName = (relics: string[], name: string): string[] => {
  return relics.filter((data) => {
    return data.includes(name);
  });
};

const App = () => {
  const lith = filterByName(data.relics, 'Lith');
  const meso = filterByName(data.relics, 'Meso');
  const neo = filterByName(data.relics, 'Neo');
  const axi = filterByName(data.relics, 'Axi');

  return (
    <>
      <Helmet>
        <title>Warframe Available Relics</title>
      </Helmet>

      <div className="main">
        <div className="main__section">
          <p className="main__update-date">{data.updateDate}</p>
        </div>
        <div className="main__section">
          <h2 className="main__title">Warframe Available Relics</h2>
        </div>

        <div className="relics">
          <div className="relics__list">
            <p className="relics__type">Lith</p>
            {lith.map((relic) => (
              <p key={relic} className="relics__name">
                {relic}
              </p>
            ))}
          </div>

          <div className="relics__list">
            <p className="relics__type">Meso</p>
            {meso.map((relic) => (
              <p key={relic} className="relics__name">
                {relic}
              </p>
            ))}
          </div>

          <div className="relics__list">
            <p className="relics__type">Neo</p>
            {neo.map((relic) => (
              <p key={relic} className="relics__name">
                {relic}
              </p>
            ))}
          </div>

          <div className="relics__list">
            <p className="relics__type">Axi</p>
            {axi.map((relic) => (
              <p key={relic} className="relics__name">
                {relic}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { App };
