import React from 'react';
import './CostItem.css';
import CostDate from "./CostDate";

const CostItem = ({date, title, amount}) => {

    return (
        <div className={"cost-item"} >
            <CostDate date={date} />
            <div>
                <div>{title}</div>
                <div>${amount}</div>
            </div>
        </div>
    );
};

export default CostItem;