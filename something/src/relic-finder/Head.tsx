import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta
        property="og:url"
        content="https://kusobako.github.io/warframe/relic-finder/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Warframe Relic Finder" />
      <meta
        property="og:description"
        content="You can find relics from prime items.プライムアイテム入手に必要なレリックを探せます。"
      />
      <meta property="og:site_name" content="Warframe Relic Finder" />
      <meta property="og:image" content="https://i.imgur.com/8GImVpk.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kusobako_de" />
      <meta name="twitter:title" content="Warframe Relic Finder" />
      <meta
        name="twitter:description"
        content="You can find relics from prime items.プライムアイテム入手に必要なレリックを探せます。"
      />
      <meta name="twitter:image" content="https://i.imgur.com/8GImVpk.png" />
      <title>Warframe Relic Finder</title>
    </Helmet>
  );
};

export default Head;
