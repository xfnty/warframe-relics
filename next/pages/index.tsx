import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Warframeの何か</title>
        </Head>

        <main className="p-2 sm:p-3">
          <p>ここには何もありません</p>
          <p>Nothing is here.</p>
        </main>
      </>
    </Layout>
  );
};

export default Home;
