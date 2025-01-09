import React from "react";
import PropTypes from "prop-types";
import dragIcon from "../../assets/drag-icon.svg";
import "./function-card-styles.css";

const FunctionCardComponent = ({ functionNo, equation, onEquationChange, nextFunction }) => {

    return (
        <div className="cardWrapper">
            <div className="header">
                <img src={dragIcon} alt="Drag Icon" className="dragIcon" />
                <p className="headerText">{`Function: ${functionNo}`}</p>
            </div>
            <div className="functionBody">
                <div className="equationWrapper">
                    <p>{'Equation'}</p>
                    <input
                        type="text"
                        className="input"
                        value={equation}
                        onChange={(e) => onEquationChange(e.target.value)}
                    />
                </div>
                <div className="dropDownWrapper">
                    <p>{'Next function'}</p>
                    <select className="input" disabled>
                        <option>{nextFunction}</option>
                    </select>
                </div>
            </div>
            <div className="inputOutputWrapper">
                <div className="connectorWrapper">
                    <div className="connector">
                        <div className="connectorChild" />
                    </div>
                    <p className="inputOutputText">{'input'}</p>
                </div>
                <div className="connectorWrapper">
                    <p className="inputOutputText">{'output'}</p>
                    <div className="connector">
                        <div className="connectorChild" />
                    </div>
                </div>
            </div>
        </div>
    );
};

FunctionCardComponent.propTypes = {
    functionNo: PropTypes.string.isRequired,
    equation: PropTypes.string.isRequired,
    onEquationChange: PropTypes.func.isRequired,
    nextFunction: PropTypes.string.isRequired,
};

export default FunctionCardComponent;
