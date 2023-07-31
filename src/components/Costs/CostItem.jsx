import React from 'react';
import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = ({date, title, amount}) => {

    const changeDescriptionHandler = () => {
        console.log('!');
    }

    return (
        <Card className={"cost-item"} >
            <CostDate date={date} />
            <div>
                <div>{title}</div>
                <div>${amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
};

export default CostItem;