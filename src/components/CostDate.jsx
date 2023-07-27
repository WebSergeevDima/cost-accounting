import React from 'react';
import './CostDate.css';

const CostDate = ({date}) => {

    const day = date.getFullYear();

    const month = date.toLocaleString('ru-RU', {
        month: 'long'
    });

    const year = date.toLocaleString('ru-RU', {
        day: '2-digit'
    });


    return (
        <div className={'cost-date'}>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
};

export default CostDate;