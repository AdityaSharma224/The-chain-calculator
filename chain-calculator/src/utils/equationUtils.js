export const isValidEquation = (equation) => {
  const validPattern = /^[0-9+\-*/^().\s*x]+$/i;
  return validPattern.test(equation);
};

export const preprocessEquation = (equation) => {
  const formattedEquation = equation.replace(/(\d)(x)/gi, "$1 * $2").replace("^", "**");
  return formattedEquation;
};

export const evaluateEquation = (equation, x) => {
  try {
    const preprocessedEquation = preprocessEquation(equation);
    const result = new Function("x", `return ${preprocessedEquation}`)(x);
    return result;
  } catch {
    return NaN;
  }
};