import React from 'react';
import styled from 'styled-components';

const DarkGreyButton = styled.button`
    background-color: #262626;
    border: none;
    color: white;
    font-size: large;
    font-weight: lighter;
    border: 1px solid black;
    font-size: 120%;    
    
    &:hover {
        background-color: #363636; 
    }

    &:active {
        background-color: #262626; 
    }
`
const LightGreyButton = styled.button`
    background-color: #373737;
    border: none;
    color: white;
    font-size: large;
    font-weight: bolder;
    border: 1px solid black;
    font-size: 120%;

    &:hover {
        background-color: #474747; 
    }

    &:active {
        background-color: #373737; 
    }
`
const OrangeButton = styled.button`
    background-color: #df7f00;
    border: none;
    color: white;
    font-size: large;
    border: 1px solid black;
    font-size: 120%;

    &:hover {
        background-color: #ef8f11; 
    }

    &:active {
        background-color: #df7f00; 
    }
`
const ButtonsContainer = styled.section`
    height: 44vh;
    display: grid;
    grid-template-columns: 5vw 5vw 5vw 5vw;
    grid-template-rows: auto auto auto auto auto;
    background-color: black;
`

function CalcButton(props) {
    const eachButton = ["C", "⌫", "√", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];

    const inputNumberValue = (value) => {
        if (!props.calculationFactors.length) {
            props.setCalculationFactors([value])
        } else if (props.calculationFactors[0] && !props.operation && value !== "+/-") {
            const updatedValue = props.calculationFactors

            updatedValue[0] += value

            props.setCalculationFactors([...updatedValue])
        } else if (props.operation && !props.calculationFactors[1]) {
            props.setCalculationFactors([...props.calculationFactors, value])
        } else if (props.operation && props.calculationFactors[1] && value !== "+/-") {
            const updatedValue = props.calculationFactors

            updatedValue[1] += value

            props.setCalculationFactors([...updatedValue])
        }

        if (value === "+/-" && props.calculationFactors[1]) {
            const updatedValue = props.calculationFactors

            updatedValue[1] = Number(updatedValue[1])
            updatedValue[1] = updatedValue[1] * -1

            props.setCalculationFactors([...updatedValue])
        } else if (value === "+/-" && !props.calculationFactors[1]) {
            const updatedValue = props.calculationFactors

            updatedValue[0] = Number(updatedValue[0])
            updatedValue[0] = updatedValue[0] * -1

            props.setCalculationFactors([...updatedValue])
        }
    }

    const selectOperation = (operation) => {
        if (operation !== "C" && operation !== "⌫" && props.calculationFactors.length) {
            props.setOperation(operation)
        } else if (operation === "C") {
            props.setOperation("")
            props.setCalculationFactors([])
            props.setMathResult(0)
        } else if (operation === "⌫") {
            if (props.calculationFactors[1] && !props.mathResult) {
                const updatedValue = props.calculationFactors

                updatedValue[1] = updatedValue[1].slice(0, -1)

                updatedValue[1] ? props.setCalculationFactors([...updatedValue]) : props.setCalculationFactors([updatedValue[0]])
            } else if (props.calculationFactors[0] && props.operation && !props.mathResult) {
                props.setOperation("")
            } else if (props.calculationFactors[0] && !props.operation && !props.mathResult) {
                const updatedValue = props.calculationFactors

                updatedValue[0] = updatedValue[0].slice(0, -1)

                updatedValue[0] ? props.setCalculationFactors([...updatedValue]) : props.setCalculationFactors([])
            } else if(props.mathResult) {
                props.setMathResult(0)
            }
        }
    }

    const doTheMath = () => {
        if (props.mathResult) {
            const updatedValue = props.calculationFactors

            updatedValue[0] = props.mathResult

            props.setCalculationFactors([...updatedValue])
        }
        if (props.operation === "√") {
            const result = Math.sqrt(Number(props.calculationFactors[0]))
            console.log(result)
            props.setMathResult(result)
        }
        if (props.operation === "+") {
            const result = Number(props.calculationFactors[0]) + Number(props.calculationFactors[1])
            props.setMathResult(result)
        }
        if (props.operation === "-") {
            const result = Number(props.calculationFactors[0]) - Number(props.calculationFactors[1])
            props.setMathResult(result)
        }
        if (props.operation === "x") {
            const result = Number(props.calculationFactors[0]) * Number(props.calculationFactors[1])
            props.setMathResult(result)
        }
        if (props.operation === "÷" && Number(props.calculationFactors[0]) !== 0 && Number(props.calculationFactors[1] !== 0)) {
            const result = Number(props.calculationFactors[0]) / Number(props.calculationFactors[1])
            props.setMathResult(result)
        }
        if (props.operation === "÷" && Number(props.calculationFactors[1]) === 0) {
            const result = "Não é possível realizar a divisão por zero"
            props.setMathResult(result)
            props.setCalculationFactors([])
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
                    return <DarkGreyButton key={index} onClick={() => selectOperation(buttonValue)}>{buttonValue}</DarkGreyButton>
                } else if (index === 19) {
                    return <OrangeButton key={index} onClick={() => doTheMath()}>{buttonValue}</OrangeButton>
                } else {
                    return <LightGreyButton key={index} onClick={() => inputNumberValue(buttonValue)}>{buttonValue}</LightGreyButton>
                }
            })}
        </ButtonsContainer>
    );
};

export default CalcButton;