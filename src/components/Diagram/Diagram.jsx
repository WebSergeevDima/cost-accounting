import React from 'react';
import './Diagram.css';
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(item => item.value)

    const maxMonthCost = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {props.dataSets.map(item => <DiagramBar key={item.label} value={item.value} label={item.label} maxCount={maxMonthCost}/>)}
        </div>
    );
};

export default Diagram;