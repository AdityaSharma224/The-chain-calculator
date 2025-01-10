// hooks/useFunctionChain.js
import { useState, useEffect, useCallback } from "react";
import { evaluateEquation } from "../utils/equationUtils";

const useFunctionChain = (initialFunctions, initialInput) => {
  const [functions, setFunctions] = useState(initialFunctions);
  const [finalOutput, setFinalOutput] = useState(0);

  const updateFunctionEquation = (index, newEquation) => {
    const updatedFunctions = [...functions];
    updatedFunctions[index].equation = newEquation;
    setFunctions(updatedFunctions);
  };

  const calculateOutput = useCallback(() => {
    let currentInput = parseFloat(initialInput) || 0;
    const order = functions.map((func) => func.name);

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
  }, [functions, initialInput]);

  useEffect(() => {
    calculateOutput();
  }, [calculateOutput]);

  return { functions, finalOutput, updateFunctionEquation };
};

export default useFunctionChain;
