import React from 'react';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Page = styled.section`
  width: 100vw;
  height: 88vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-top: 12vh;
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
