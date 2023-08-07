import React, {useState} from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const changeNameHandler = (event) => {
        setName(event.target.value)
    }

    const changeAmountHandler = (event) => {
        setAmount(event.target.value)
    }

    const changeDateHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name,
            amount,
            date: new Date(date)
        };

        props.onSaveCostData(costData);

        setName('');
        setAmount('');
        setDate('');
    }

    return (
        <div className="cost-form">
            <form onSubmit={submitHandler}>
                <div className="cost-form__control">
                    <label>Название</label>
                    <input type="text" onChange={changeNameHandler} value={name}/>
                </div>
                <div className="cost-form__control">
                    <label>Сумма</label>
                    <input type="number" step="0.01" min="0.01" onChange={changeAmountHandler} value={amount}/>
                </div>
                <div className="cost-form__control">
                    <label>Дата</label>
                    <input type="date" max="2023-08-02" onChange={changeDateHandler} value={date}/>
                </div>
                <button type="submit" className="cost-form__actions">
                    <div className="cost-form__btn">Добавить расход</div>
                </button>
            </form>
        </div>
    );
};

export default CostForm;