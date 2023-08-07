import React, {useState} from 'react';
import CostItem from "./CostItem";
import Card from "../UI/Card";
import './CostItems.css';
import CostFilter from "./CostFilter";

const CostItems = (props) => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    };


    return (

        <div>

            <Card className={'cost-items'}>
                <CostFilter changeYearHandler={changeYearHandler} selectedYear={selectedYear}/>
                {props.list.map(item => {
                    return <CostItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
                })}
            </Card>
        </div>

    );
};

export default CostItems;