import React, { useState } from "react";
import { ThemeProvider } from 'styled-components'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { temaClaro, temaEscuro } from './Components/UI/temas'
import { BtnTema } from './Components/UI'
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  }

  return (
    <>
      <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={handleTheme}>
          <SwitcherTema tema={theme} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
