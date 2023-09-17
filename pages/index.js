import HomeScreen from "../src/screens/HomeScreen/HomeScreen";
export default HomeScreen;

// TESTE - INICINADO NEXT JS
// import React from "react";

// import Footer from "../src/components/patterns/Footer/Footer";

// import { useState } from "react";
// import Link from "../src/components/Link";

// //Modo padrão com module
// import styles from "./index.module.css";

// // //Modo de estilização no next CSS-in-js
// // function GlobalStyle() {
// //   return (
// //     // Para ser global, tem que usar o 'global' antes do 'jsx'. Porém não funciona em todas as páginas
// //     //Tem que fazer num arquivo _app.js
// //     <style global jsx>{`
// //       body {
// //         font-family: sans-serif;
// //       }
// //     `}</style>
// //   );
// // }

// function Title({ children, as }) {
//   const Tag = as;
//   return (
//     <React.Fragment>
//       <Tag>{children}</Tag>
//       <style jsx>
//         {`
//           ${Tag} {
//             color: red;
//           }
//         `}
//       </style>
//     </React.Fragment>
//   );
// }

// const index = () => {
//   //Testando react
//   // const [contador, setContador] = useState(0);
//   // const somandoContador = () => {
//   //   setContador(contador + 1);
//   // };

//   return (
//     <>
//       {/* <GlobalStyle /> */}
//       <Title as="h1">Alura Case - Home</Title>
//       {/* <Link href="/FAQPage">Ir para a página de perguntas</Link>; */}
//       <Link href={"/FAQPage"}>Ir para a página do FAQ</Link>
//       {/* <p>Contador: {contador}</p> */}
//       {/* <button onClick={somandoContador}>clique</button> */}
//       {/* <p className={styles.p}>Exemplo CSS modules</p> */}
//       <Footer />
//     </>
//   );
// };

// export default index;
