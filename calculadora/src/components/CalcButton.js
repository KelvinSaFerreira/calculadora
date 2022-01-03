import React from 'react';
import styled from 'styled-components';

const DarkGrey = styled.button`
    background-color: #262626;
    border: none;
    color: white;
    font-size: large;
    font-weight: light;
`
const LightGrey = styled.button`
    background-color: #373737;
    border: none;
    color: white;
    font-size: large;
    font-weight: bolder;
`
const Orange = styled.button`
    background-color: #df7f00;
    border: none;
    color: white;
    font-size: large;
`
const ButtonsContainer = styled.section`
    width: 20vw;
    height: 44vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto;
    grid-gap: 1.5px;
    background-color: black;
`

function CalcButton(props) {
    const eachButton = ["C", "⌫", "√", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, ".", "="];

    const setValue = (value) => {
        if(props.wantedValue >= 3) {
            props.setWantedValue([])
            props.setWantedValue([...wantedValue, value])
        } else {
            props.setWantedValue([...wantedValue, value])
        }
    }

    const doTheMath = () => {
        if(props.wantedValue[0] === "√") {
            const result = sqrt(props.wantedValue[1])
            props.setMathResult(result)
        }
        if(props.wantedValue[1] === "+") {
            const result = props.wantedValue[0] + props.wantedValue[2]
            props.setMathResult(result)
        }
        if(props.wantedValue[1] === "-") {
            const result = props.wantedValue[0] - props.wantedValue[2]
            props.setMathResult(result)
        }
        if(props.wantedValue[1] === "x") {
            const result = props.wantedValue[0] * props.wantedValue[2]
            props.setMathResult(result)
        }
        if(props.wantedValue[1] === "÷" && props.wantedValue[0] !== 0 && props.wantedValue[2] !== 0) {
            const result = props.wantedValue[0] / props.wantedValue[2]
            props.setMathResult(result)
        }
        if(props.wantedValue[1] === "÷" && props.wantedValue[0] === 0 || props.wantedValue[2] === 0) {
            const result = "Não é possível realizar a divisão por zero"
            props.setMathResult(result)
        }
    }

    return (
        <ButtonsContainer>
            {eachButton.map((buttonValue, index) => {
                if (
                    index === 0 ||
                    index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 7 ||
                    index === 11 ||
                    index === 15
                ) {
                    return <DarkGrey>{buttonValue}</DarkGrey>
                } else if (index === 19) {
                    return <Orange>{buttonValue}</Orange>
                } else {
                    return <LightGrey>{buttonValue}</LightGrey>
                }
            })}
        </ButtonsContainer>
    );
};

export default CalcButton;