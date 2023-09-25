function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

export const getServerSideProps = async () => {
  await delay(2);

  return {
    props: {
      mensagem: "Fui gerada pra essa requisição!",
    },
  };
};

function SSRPage({ mensagem }) {
  return <div>{mensagem}</div>;
}

export default SSRPage;
