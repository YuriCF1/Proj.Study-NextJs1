//Esse arquivo é feito para fazer um pre carregamento de qualquer coisa caso a página seja mudada
//é basicamente um middlawre

//Descrição da documentação:
//"The Component prop is the active page, so whenever you navigate between routes,
//Component will change to the new page. Therefore, any props you send to Component will be received by the page."

import { AppProps } from "next/app";
import GlobalStyle from "../src/theme/GlobalStyle";
import GlobalStyle2 from "../src/theme/GlobalStyle2";

import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle2 />
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G72TSB8J9S"
        />

        <Script
          dangerouslySetInnerHTML={{
            // <!-- Google tag (gtag.js) -->
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-G72TSB8J9S');
            `,
          }}
        />
{/* 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      {/* Teste de componente middleware */}
      <Component {...pageProps} />
    </>
  );
}
