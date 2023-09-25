function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

export const getStaticProps = async () => {
  await delay(2);

  return {
    props: {
      mensagem: 'Fui gerado no build',
    },
  };
};

function SSGPage({ mensagem }) {
  return <div>{mensagem}</div>;
}

export default SSGPage;

/*
Após iniciar o servidor, era esperado que a página inicial carregasse rapidamente por ser estática. 
A página /ssr demorou cerca de 2 segundos para ser renderizada devido ao atraso dentro de getServerSideProps. 
Curiosamente, esse atraso também está presente em /ssg, mas durante o curso você aprendeu que o getStaticProps 
deveria rodar somente 1 vez durante o build, portanto, o atraso não deveria ocorrer no acesso à página.

Isso acontece porque em ambiente de desenvolvimento (ou seja, quando usamos yarn dev), 
o getStaticProps é executado em cada requisição, se comportando de maneira semelhante ao getServerSideProps.

Para ver o getStaticProps em ação, você deve executar o comando yarn build para que as páginas estáticas sejam geradas.
*/