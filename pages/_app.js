import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>UmaVeena</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
         
      <link rel="preconnect" href="" />
      <link rel="stylesheet" href="" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
