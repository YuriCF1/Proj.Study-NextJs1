//Modo de estilização no next CSS-in-js
function GlobalStyle() {
  return (
    // Para ser global, tem que usar o 'global' antes do 'jsx'. Porém não funciona em todas as páginas
    //Tem que fazer num arquivo _app.js
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  );
}

export default GlobalStyle;
