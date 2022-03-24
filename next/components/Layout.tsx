import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-y-scroll bg-[#222] text-white">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
