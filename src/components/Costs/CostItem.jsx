import React, {useState} from 'react';
import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const changeDescriptionHandler = () => {
        setTitle('New title')
    }

    return (
        <Card className={"cost-item"} >
            <CostDate date={props.date} />
            <div>
                <div>{title}</div>
                <div>${props.amount}</div>
            </div>
        </Card>
    );
};

export default CostItem;