import React, { useState } from 'react';
import styled from 'styled-components';
import CalcButton from "../components/CalcButton";


const Main = styled.main`
    background-color: black;
    text-align: end;
    width: 20vw;
    height: 24vh;
    color: white;
    font-size: 120%;
`

const Screen = styled.div`
    height: 16.4vh;
    padding-right: 1vw;
    padding-top: 4vh;
    overflow-x: auto;
    overflow-y: hidden;
`

const Result = styled.p`
    font-size: 180%;
`

function CalcScreen() {
    const [calculationFactors, setCalculationFactors] = useState([])
    const [operation, setOperation] = useState("")
    const [mathResult, setMathResult] = useState(0)

    function separator(num) {
        var str = num.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    return (
        <Main>
            {mathResult === "Não é possível realizar a divisão por zero" ?
                <Screen>
                    <p>{mathResult} (aperte C)</p>
                </Screen> :
                <Screen>
                    {mathResult ? <p>{separator(calculationFactors[0])} {operation} {calculationFactors.length === 2 ? separator(calculationFactors[1]) : ""} = </p> : ""}
                    {mathResult ?
                        <Result>{separator(mathResult)}</Result> :
                        calculationFactors.length ? <p>{separator(calculationFactors[0])} {operation} {calculationFactors.length === 2 ? separator(calculationFactors[1]) : ""}</p> :
                            <p>0</p>}
                </Screen>
            }

            <CalcButton
                calculationFactors={calculationFactors}
                setCalculationFactors={setCalculationFactors}
                operation={operation}
                setOperation={setOperation}
                mathResult={mathResult}
                setMathResult={setMathResult}
            />
        </Main>
    );
}

export default CalcScreen;