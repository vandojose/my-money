import React from "react";

import Rest from "./rest";

// const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet, usePost, useDelete } = Rest(baseUrl);

function App() {
  const data = useGet("movimentacoes/2020-07");
  const [postData, post] = usePost("movimentacoes/2020-07");
  const [deleteData, remove] = useDelete();
  const saveNew = () => {
    post({ valor: 11, descricao: "esfiha2" });
  };
  const doRemove = () => {
    remove("movimentacoes/2020-07/-MCTo_OjsS6QFBVfy5Aq");
  };

  return (
    <div>
      <h1>My Money</h1>
      <div>
        {data.loading ? (
          <p>Loading...</p>
        ) : (
          <pre>
            `$
            {JSON.stringify(data.data)}`
          </pre>
        )}
      </div>

      <button onClick={saveNew}>Salvar</button>

      <div>
        {postData.loading ? <p>Loading...</p> : `${JSON.stringify(postData)}`}
      </div>

      <div>{deleteData.loading ? <p>Loading...</p> : <p>Deletado</p>}</div>

      <button onClick={doRemove}>Remover</button>
    </div>
  );
}

export default App;
