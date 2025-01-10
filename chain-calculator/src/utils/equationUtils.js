export const validateEquation = (equation) => {
    const regex = /^[0-9+\-*/^().x\s]*$/;
    return regex.test(equation);
  };
  
  export const calculateFunctionChain = (initialInput, functions) => {
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
  
    return x;
  };
  