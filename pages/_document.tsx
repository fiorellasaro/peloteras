import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const CustomDocument = () => {
  return (
    <Html lang={'en'}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'anonymous'} />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope:wght@400;500;600;700;800;900&&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Improve women’s soccer life by providing a platform for players to find teams and teams to find players.'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Peloteras</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
