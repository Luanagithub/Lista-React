import React, { useState } from 'react';
import Contato from './Contatos/Contatos.tsx';
import Escopo from './Agenda/Escopo.tsx';
import EstiloGlobal from './GlobalStyle';
import EscopoStyled from './Agenda/EscopoStyled.tsx';

function App() {
  return (
    <>
    <EstiloGlobal />
    <Escopo>
    <h1>Contatos</h1>
      <Contato></Contato>
    </Escopo>
    </>
  );
}

export default App;
