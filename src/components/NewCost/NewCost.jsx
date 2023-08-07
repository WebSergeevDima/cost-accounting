import React from 'react';
import CostForm from "./CostForm";
import './NewCost.css';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        const costdata = {
            ...inputCostData,
            id: Math.random().toString()
        }

        props.onAddCost(costdata);
    }

    return (
        <div className="new-cost">
            <CostForm onSaveCostData={saveCostDataHandler}  />
        </div>
    );
};

export default NewCost;