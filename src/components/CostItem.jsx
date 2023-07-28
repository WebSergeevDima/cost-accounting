import React from 'react';
import './CostItem.css';
import CostDate from "./CostDate";
import Card from "./Card";

const CostItem = ({date, title, amount}) => {

    return (
        <Card className={"cost-item"} >
            <CostDate date={date} />
            <div>
                <div>{title}</div>
                <div>${amount}</div>
            </div>
        </Card>
    );
};

export default CostItem;