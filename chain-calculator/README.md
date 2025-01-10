# Function Chain

This project is a React application that allows users to create and evaluate a chain of mathematical functions. Each function in the chain can be defined by an equation, and the output of one function serves as the input to the next.

## Features

- **Dynamic Function Chain**: Users can define a series of functions, each with its own equation.
- **Equation Validation**: Ensures that only valid equations are accepted.
- **Real-time Calculation**: Automatically calculates the final output based on the initial input and the defined functions.

## Components

### FunctionChain

This is the main component that manages the state and logic of the function chain.

#### State

- `initialInput`: The initial value of `x`.
- `functions`: An array of function objects, each containing a name, equation, and the name of the next function.
- `finalOutput`: The final calculated output.

#### Methods

- `handleEquationChange(index, newEquation)`: Updates the equation of a function at the specified index.
- `calculateOutput()`: Calculates the final output based on the initial input and the defined functions.
- `handleInputOnchange(e)`: Updates the initial input value.

#### Lifecycle

- `useEffect()`: Recalculates the output whenever the initial input or functions change.

### FunctionCardComponent

This component represents an individual function card in the chain.

#### Props

- `functionNo`: The name/number of the function.
- `equation`: The equation defined for the function.
- `onEquationChange`: Callback to handle changes to the equation.
- `nextFunction`: The name/number of the next function in the chain.

## Utility Functions

### equationUtils

- `isValidEquation(equation)`: Validates the given equation.
- `evaluateEquation(equation, input)`: Evaluates the equation with the given input.

## Styles

- `function-chain-styles.css`: Styles for the `FunctionChain` component.
- `function-card-styles.css`: Styles for the `FunctionCardComponent`.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Define the initial input value.
5. Define equations for each function in the chain.
6. View the final output as it updates in real-time.

## Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import FunctionChain from "./components/function-chain/function-chain-component";

ReactDOM.render(<FunctionChain />, document.getElementById("root"));