import React, {useState} from 'react';
import './CostFilter.css';

const CostFilter = (props) => {


    const changeYearHandler = (event) => {
        props.changeYearHandler(event.target.value)
    };

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор По Году:</label>
                <select value={props.selectedYear} onChange={changeYearHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostFilter;