import React from 'react';
import MainPage from './pages/MainPage';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import styled from 'styled-components'

const Page = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <MainPage />
    </Page>
  );
}

export default App;
