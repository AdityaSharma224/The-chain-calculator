import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dragIcon from "../../assets/drag-icon.svg";
import "./function-card-styles.css";

const FunctionCardComponent = ({ functionNumber }) => {

    return (
        <div className="cardWrapper">
            <div className="header">
                <img src={dragIcon} alt="Drag Icon" className="dragIcon" />
                <p className="headerText">{`Function: ${'1'}`}</p>
            </div>

            <div className="functionBody">
                <div className="equationWrapper">
                    <p>{'Equation'}</p>
                    <input type="text" className="input" />
                </div>
                <div className="dropDownWrapper">
                    <p>{'Next function'}</p>
                    <select className="input" disabled>
                        <option>{'Next Function'}</option>
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
    functionName: PropTypes.string.isRequired,
    equation: PropTypes.string.isRequired,
    onEquationChange: PropTypes.func.isRequired,
    nextFunction: PropTypes.string.isRequired,
};

export default FunctionCardComponent;
