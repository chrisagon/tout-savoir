import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
         <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="Tout savoir sur un sujet en quelques secondes grâce à l'I.A."
          />
          <meta
            property="og:description"
            content="Tout savoir sur un sujet en quelques secondes grâce à l'I.A."
          />
          <meta property="og:title" content="Tout savoir" />
          <meta
            name="twitter:description"
            content="Tout savoir sur un sujet en quelques secondes grâce à l'I.A."
          />
          <meta
            property="og:image"
            content="https://www.teach-anything.com/og-image.png"
          />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@lvwzhen"/>
          <meta name="twitter:title" content="Teach Anything"/>
          <meta name="twitter:description" content="Tout savoir sur un sujet en quelques secondes grâce à l'I.A."/>
          <meta name="twitter:image" content="https://www.teach-anything.com/og-image.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
