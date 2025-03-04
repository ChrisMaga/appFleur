JavaScript

import React, { useState } from 'react';

function DataFoto() {
  const [dataInicial, setDataInicial] = useState('');
  const [fotoExibida, setFotoExibida] = useState(null);

  const verificarData = () => {
    const dataAtual = new Date();
    const dataInicialObj = new Date(dataInicial);

    // Calcula a diferença em milissegundos
    const diferencaEmMs = dataAtual - dataInicialObj;

    // Converte a diferença para dias
    const diferencaEmDias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));

    if (diferencaEmDias === 7 < 21) {
      // Exibe a foto se a diferença for de 7 dias
      setFotoExibida('/caminho/para/sua/foto.jpg');
    } else {
      setFotoExibida(null); // Remove a foto se a diferença não for de 7 dias
    }
  };

  return (
    <div>
      <label>
        Data Inicial:
        <input
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
      </label>
      <button onClick={verificarData}>Verificar</button>

      {fotoExibida && <img src={fotoExibida} alt="Foto especial" />}
    </div>
  );
}

export default DataFoto;