import React from 'react';
import CostItem from "./CostItem";
import Card from "./Card";
import './CostItems.css';

const CostItems = (props) => {
    return (
        <Card className={'cost-items'}>
            {props.list.map(item => {
                return <CostItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
            })}
        </Card>
    );
};

export default CostItems;