import React from 'react';
import CalcButton from "../components/CalcButton";
import CalcScreen from '../components/CalcScreen';
import styled from 'styled-components';

const Container = styled.section`
    width: 20vw;
    display: flex;
    flex-direction: column;
`

function MainPage() {

    return (
        <Container>
            <CalcScreen />
            <CalcButton />
        </Container>
    );
};

export default MainPage;
