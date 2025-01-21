//exemplo para fazer a mensagem aparec

import React, { useState } from 'react';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(false);
    setIsMessageVisible(true);
  };

  return (
    <div>
      {isFormVisible && (
        <form>
          <h2>Solicitar Troca de Senha</h2>
          <input type="email" placeholder="Seu email" />
          <button type="button" onClick={handleButtonClick}>
            Enviar
          </button>
        </form>
      )}
      {isMessageVisible && (
        <div>
          <h2>Email enviado!</h2>
          <p>Verifique seu email para as instruções de troca de senha.</p>
        </div>
      )}
    </div>
  );
}

export default App;
