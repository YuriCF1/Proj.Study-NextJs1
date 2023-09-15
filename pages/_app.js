//Esse arquivo é feito para fazer um pre carregamento de qualquer coisa caso a página seja mudada
//é basicamente um middlawre

//Descrição da documentação:
//"The Component prop is the active page, so whenever you navigate between routes, 
//Component will change to the new page. Therefore, any props you send to Component will be received by the page."

import { AppProps } from "next/app";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      Teste de componente middleware
      <Component {...pageProps} />
    </>
  );
}
