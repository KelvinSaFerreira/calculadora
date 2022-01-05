import React from 'react';
import CalcScreen from '../components/CalcScreen';
import styled from 'styled-components';

const Container = styled.section`
    width: 20.4vw;
    height: 64.8vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #006a6a; 
`

function MainPage() {

    return (
        <Container>
            <CalcScreen />
        </Container>
    );
};

export default MainPage;
