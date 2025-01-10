import React, { useState, useEffect, useCallback } from "react";
import "./function-chain-styles.css";
import FunctionCardComponent from "../function-card/function-card-component";
import Connector from "../connector/connector-component";
import Divider from "../divider/divider-component";
import { isValidEquation, evaluateEquation } from "../../utils/equationUtils";

const FunctionChain = () => {
  const [initialInput, setInitialInput] = useState(0);
  const [functions, setFunctions] = useState([
    { name: "1", equation: "", next: "2" },
    { name: "2", equation: "", next: "4" },
    { name: "3", equation: "", next: "-" },
    { name: "4", equation: "", next: "5" },
    { name: "5", equation: "", next: "3" },
  ]);
  const [finalOutput, setFinalOutput] = useState(0);

  const handleEquationChange = (index, newEquation) => {
    if (newEquation === "" || isValidEquation(newEquation)) {
      const updatedFunctions = [...functions];
      updatedFunctions[index].equation = newEquation;
      setFunctions(updatedFunctions);
    } else {
      alert(
        "Invalid equation! Please use only numbers, x, and +, -, *, /, ^ operators."
      );
    }
  };

  const calculateOutput = useCallback(() => {
    let currentInput = parseFloat(initialInput) || 0;
    const order = ["1", "2", "4", "5", "3"];

    for (let funcName of order) {
      const func = functions.find((f) => f.name === funcName);
      if (func && func.equation) {
        const result = evaluateEquation(func.equation, currentInput);
        if (isNaN(result)) {
          setFinalOutput("Error");
          return;
        }
        currentInput = result;
      }
    }
    setFinalOutput(currentInput);
  }, [initialInput, functions]);

  const handleInputOnchange = useCallback((e) => {
    setInitialInput(e.target.value);
  },[]);

  useEffect(() => {
    calculateOutput();
  }, [initialInput, functions]);

  return (
    <div className="wrapper">
      <div className="inputWrapper">
        <div className="initialInputTextWrapper">
          <p>{"Initial value of x"}</p>
        </div>
        <div className="initialInputBox">
          <input
            type="number"
            value={initialInput}
            className="inputBox"
            onChange={handleInputOnchange}
          />
          <Divider color={"#FFEED5"} />
          <div style={{ marginLeft: "15px" }}>
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
            onEquationChange={(newEquation) =>
              handleEquationChange(index, newEquation)
            }
            nextFunction={func.next}
          />
        ))}
      </div>
      <div className="outputWrapper">
        <div className="outputTitle">
          <p>{"Final Output y"}</p>
        </div>
        <div className="finalOutputBox">
          <div style={{ marginLeft: "15px" }}>
            <Connector />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Divider color={"#C5F2DA"} />
          </div>
          <p className="finalOutput">{finalOutput}</p>
        </div>
      </div>
    </div>
  );
};

export default FunctionChain;
