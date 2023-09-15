import React from "react";
import { useState } from "react";

import Link from "../src/components/Link";

//Modo padrão com module
import styles from "./index.module.css"

//Modo de estilização no next CSS-in-js
function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
            font-family: sans-serif;
          }
        `}
      </style>
    </React.Fragment>
  );
}

const index = () => {
  //Testando react
  // const [contador, setContador] = useState(0);
  // const somandoContador = () => {
  //   setContador(contador + 1);
  // };

  return (
    <>
      <Title as="h1">Alura Case - Home</Title>
      {/* <Link href="/FAQPage">Ir para a página de perguntas</Link>; */}
      <Link href={"/FAQPage"}>Ir para a página do FAQ</Link>
      {/* <p>Contador: {contador}</p> */}
      {/* <button onClick={somandoContador}>clique</button> */}
      <p className={styles.p}>Exemplo</p>
    </>
  );
};

export default index;
