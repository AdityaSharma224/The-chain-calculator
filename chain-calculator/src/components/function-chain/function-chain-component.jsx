import React, { useState, useEffect } from "react";
import "./function-chain-styles.css";
import FunctionCardComponent from "../function-card/function-card-component";
import Connector from '../connector/connector-component'

const FunctionChain = () => {
    const [initialInput, setInitialInput] = useState(0);
    const [functions, setFunctions] = useState([
        { name: "1", equation: "", next: "1" },
        { name: "2", equation: "", next: "4" },
        { name: "3", equation: "", next: "-" },
        { name: "4", equation: "", next: "5" },
        { name: "5", equation: "", next: "3" },
    ]);
    const [finalOutput, setFinalOutput] = useState(0);

    const validateEquation = (equation) => {
        const regex = /^[0-9+\-*/^().x\s]*$/;
        return regex.test(equation);
    };

    const calculateOutput = () => {
        let x = parseFloat(initialInput);
        let currentFunction = functions.find((func) => func.name === "1");

        while (currentFunction) {
            if (validateEquation(currentFunction.equation)) {
                try {
                    const processedEquation = currentFunction.equation
                        .replace(/(\d)x/g, "$1*x")
                        .replace(/x/g, `(${x})`)
                        .replace(/\^/g, "**");

                    x = eval(processedEquation);
                } catch (e) {
                    console.error("Invalid equation:", currentFunction.equation);
                    break;
                }
            } else {
                console.error("Invalid equation format:", currentFunction.equation);
                break;
            }

            currentFunction = currentFunction.next
                ? functions.find((func) => func.name === currentFunction.next)
                : null;
        }

        setFinalOutput(x);
    };

    useEffect(() => {
        calculateOutput();
    }, [initialInput, functions]);

    const handleEquationChange = (index, newEquation) => {
        const updatedFunctions = [...functions];
        updatedFunctions[index].equation = newEquation;
        setFunctions(updatedFunctions);
    };

    return (
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div className="inputWrapper">
                <div className='initialInputTextWrapper'><p>{'Initial value of x'}</p></div>
                <div className="initialInputBox">
                    <input
                        type="number"
                        value={initialInput}
                        className="inputBox"
                        onChange={(e) => setInitialInput(e.target.value)}
                    />
                    <div style={{
                        height: '48px',
                        border: '1px solid #FFEED5',
                        marginTop: '1px',
                        transform: 'scaleX(0.4)',
                    }}
                    />
                    <div style={{ marginLeft: '15px' }}>
                        <Connector />
                    </div>
                </div>
            </div>
            <div className="functionChainWrapper">
                {functions.map((func, index) => (
                    <FunctionCardComponent
                        key={func.name}
                        functionNo={func.name}
                        equation={func.equation}
                        onEquationChange={(newEquation) => handleEquationChange(index, newEquation)}
                        nextFunction={func.next}
                    />
                ))}
            </div>
            <div>
                <div className='outputTitle'><p>{'Final Output y'}</p></div>
                <div className="finalOutputBox">
                    <div style={{ marginLeft: '15px' }}>
                        <Connector />
                    </div>
                    <div style={{
                        height: '48px',
                        border: '1px solid #C5F2DA',
                        marginTop: '1px',
                        transform: 'scaleX(0.4)',
                        marginLeft: '10px',
                    }}
                    />
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginleft:'20px',
                    }}>{finalOutput}</p>
                </div>
            </div>
        </div>

    );
};

export default FunctionChain;
