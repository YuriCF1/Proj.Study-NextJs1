import { useState } from "react";
import Link from "../src/components/Link";

const index = () => {
  //Testando react
  // const [contador, setContador] = useState(0);
  // const somandoContador = () => {
  //   setContador(contador + 1);
  // };

  return (
    <>
      <h1>Alura Case - Home page</h1>
      {/* <Link href="/FAQPage">Ir para a página de perguntas</Link>; */}
      <Link href={"/FAQPage"}>Ir para a página do FAQ</Link>
      {/* <p>Contador: {contador}</p> */}
      {/* <button onClick={somandoContador}>clique</button> */}
    </>
  );
};

export default index;
