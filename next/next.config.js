/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const config = {
  reactStrictMode: true,
  eslint: {
    // By default, Next.js will run ESLint for all files in the pages/, components/, and lib/ directories.
    dirs: ['pages', 'components', 'lib', 'hooks'],
  },
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      ...config,
    };
  }

  return {
    /* config options for all phases except development here */
    ...config,
    basePath: '/warframe',
  };
};
