import React from 'react';
import CostItem from "./CostItem";
import './CostList.css';

const CostList = (props) => {



    if(!props.list.length) {
        return <div className="cost-item__empty">Информация отсутствует!</div>;
    }

    return (
        <ul className="cost-item__list">
            {props.list.map(item => {
                return <li><CostItem key={item.id} date={item.date} title={item.title} amount={item.amount}/></li>
            })}
        </ul>
    );
};

export default CostList;