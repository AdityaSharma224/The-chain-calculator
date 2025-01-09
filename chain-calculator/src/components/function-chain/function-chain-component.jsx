import React, { useState, useEffect } from "react";
import "./function-chain-styles.css";
import FunctionCardComponent from "../function-card/function-card-component";

const FunctionChain = () => {
    const [initialInput, setInitialInput] = useState(0);
    const [functions, setFunctions] = useState([
        { name: "1", equation: "", next: "2" },
        { name: "2", equation: "", next: "4" },
        { name: "4", equation: "", next: "5" },
        { name: "5", equation: "", next: "3" },
        { name: "3", equation: "", next: null },
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
        <div className="functionChainWrapper">
            <div className="initialInputWrapper">
                <p>Initial Input (x):</p>
                <input
                    type="number"
                    value={initialInput}
                    onChange={(e) => setInitialInput(e.target.value)}
                />
            </div>
            {functions.map((func, index) => (
                <FunctionCardComponent
                    key={func.name}
                    functionNo={func.name}
                    equation={func.equation}
                    onEquationChange={(newEquation) => handleEquationChange(index, newEquation)}
                    nextFunction={func.next}
                />
            ))}
            <div className="finalOutputWrapper">
                <p>Final Output (y): {finalOutput}</p>
            </div>
        </div>
    );
};

export default FunctionChain;
