import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    background-color: black;
    text-align: end;
    width: 20vw;
    height: 16vh;
`

function CalcScreen() {
    return (
        <Main>
            <p>2 x 2 = </p>
            <p>4</p>
        </Main>
    );
}

export default CalcScreen;