import React, {useState} from 'react';
import Card from "../UI/Card";
import './CostItems.css';
import CostFilter from "./CostFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const CostItems = (props) => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filterList = props.list.filter(item => selectedYear === item.date.getFullYear().toString());

    return (
        <div>
            <Card className={'cost-items'}>
                <CostFilter changeYearHandler={changeYearHandler} selectedYear={selectedYear}/>
                <CostsDiagram costs={filterList}/>
                <CostList list={filterList}/>
            </Card>
        </div>

    );
};

export default CostItems;