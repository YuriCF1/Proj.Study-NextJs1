import Link from "next/link";
import { useEffect, useState } from "react";

//Adding Head into pages
import Head from "next/head";

import PageTitle from "../src/components/Title";

//Scripts originais
// "scripts": {
//   "dev": "next dev",
//   "build": "next build",
//   "export": "next build && next export",
//   "start": "next start",
//   "lint": "next lint"
// }

{
  /*
Notas:
SSG - Static Site Generation
SSR - Server Site Rendering
ISG -Incremental Static Generator

As funções a seguir servem para colher dados de uma API e pre renderizar, para que apareça do código fonte da página, por conta de SEO's. 

O getStaticProps serve apenas para pegar dados que não são dinâmicos, que nunca mudarão. Não interessa se o servidor cair, ele pegará os mesmos dados
Por isso, quando ele é usado, o comando para exportar pode ser o "npm run build"(ou npx build & npx export). 
A vantagem dessa função, é a estrutura mais barata, a utilização abrangente de caches, hospedagem mais diversas como no githubpages (que sao mais baratas) e etc.

O getServerSideProps é a função responsável por fazer a mesma coisa, porém com dados dinâmicos, que não irão permanecer os mesmos. Usado para sites com atualização de dados mais frequentes
Caso eu tente rodar o "num run build", dará erro. Pois um site ESTÁTICO, NÃO PODE ter um comnando que roda toda vez que a página á acessada
Por isso usa-se o "npx build && npm run start" (npx serve@latest out)?. Comando "go" no projeto atual. ATENÇÂO: o export do next.config.js desligado
Nesse caso, toda vez qeu abrir a página "faq", ele vai recarregar tudo

Já em DENSENVOLVIMENTO(npm run dev), cada uma dessas duas funções sempre vão rodar. SENDO QUE AS DUAS SEMPRE RODAM A CADA ACESSO
*/
}

// export async function getStaticProps() {
// console.log("Roda somente em build time");
export async function getServerSideProps() {
  console.log("Roda a cada acesso que você recebe");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faqRes = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquerCoisa: "Escrita aqui",
      faqRes,
    },
  };
}

const faq = ({ faqRes }) => {
  // const [faq, setFaq] = useState([]);
  // useEffect(() => {
  //   setFaq(faqRes);
  // }, []);

  return (
    <div>
      {/* <Head>
        <title>Home - Alura Cases Campanha</title>
      </Head> */}
      <PageTitle>Home - Alura Cases Campanha</PageTitle>
      <h1>Alura Case - Página de perguntas FAQ</h1>
      <Link href="/">Ir para a home</Link>
      {/* <p>{faq[1].question}</p> */}
      <ul>
        {faqRes.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default faq;
