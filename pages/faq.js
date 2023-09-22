import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const FAQ_API_URL =
    " https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

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
    <>
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
    </>
  );
};

export default faq;
