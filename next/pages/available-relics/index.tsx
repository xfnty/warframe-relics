import Head from 'next/head';
import data from '../../assets/relics.json';
import Relics from '../../components/available-relics/Relics';
import Layout from '../../components/Layout';

const filterByName = (relics: string[], name: string): string[] => {
  return relics.filter((data) => {
    return data.includes(name);
  });
};

const AvailableRelics = () => {
  const title = 'Warframe Available Relics';

  const lith = filterByName(data.relics, 'Lith');
  const meso = filterByName(data.relics, 'Meso');
  const neo = filterByName(data.relics, 'Neo');
  const axi = filterByName(data.relics, 'Axi');

  return (
    <Layout>
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <main className="p-2 sm:p-3">
          <p className="mb-2 text-xs">{data.updateDate}</p>
          <h1 className="mb-3 text-lg font-bold sm:text-2xl">{title}</h1>

          <div className="grid max-w-md grid-cols-4">
            <Relics name="Lith" relics={lith} />
            <Relics name="Meso" relics={meso} />
            <Relics name="Neo" relics={neo} />
            <Relics name="Axi" relics={axi} />
          </div>
        </main>
      </>
    </Layout>
  );
};

export default AvailableRelics;
