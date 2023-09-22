import Link from "next/link";
import { useEffect, useState } from "react";

const FAQPage = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const FAQ_API_URL =
      " https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    fetch(FAQ_API_URL)
      .then((respostaDoServidor) => {
        return respostaDoServidor.json();
      })
      .then((resposta) => {
        console.log(resposta);
        setFaq(resposta);

        console.log(resposta[1].question);
      });
  }, []);

  return (
    <>
      <h1>Alura Case - Página de perguntas FAQ</h1>
      <Link href="/">Ir para a home</Link>
      {/* <p>{faq[1].question}</p> */}
      <ul>
        {faq.map(({ answer, question }) => (
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

export default FAQPage;
