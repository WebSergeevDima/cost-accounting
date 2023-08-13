import React from 'react';
import './DiagramBar.css';

const DiagramBar = (props) => {

    let barFillHeight = '0%';

    if(props.maxCount > 0) {
        barFillHeight = Math.round(props.value / props.maxCount * 100) + '%';
    }


    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div className="diagram-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="diagram-bar__label"></div>
        </div>
    );
};

export default DiagramBar;