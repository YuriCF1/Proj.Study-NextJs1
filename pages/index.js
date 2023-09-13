import Link from "../src/components/Link";

const index = () => {
  return (
    <>
      <h1>Alura Case - Home page</h1>
      {/* <Link href="/FAQPage">Ir para a página de perguntas</Link>; */}
      <Link href={"/FAQPage"}>Ir para a página do FAQ</Link>
    </>
  );
};

export default index;
