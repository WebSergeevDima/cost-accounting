import React, {useState} from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isForm, setIsForm] = useState(false);

    const changeNameHandler = (event) => {
        setTitle(event.target.value)
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
            title,
            amount,
            date: new Date(date)
        };

        props.onSaveCostData(costData);
        setIsForm(false);

        setTitle('');
        setAmount('');
        setDate('');
    }

    const showFormHandler = () => {
        setIsForm(true);
    }
    const hideFormHandler = () => {
        setIsForm(false);
    }

    if(!isForm) {
        return <button className="btn__open-form" onClick={showFormHandler}>Добавить новый расход</button>;

    }

    return (
        <div className="cost-form">
            <form onSubmit={submitHandler}>
                <div className="cost-form__control">
                    <label>Название</label>
                    <input type="text" onChange={changeNameHandler} value={title}/>
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
                <button type="submit" className="cost-form__actions" onClick={hideFormHandler}>
                    <div className="cost-form__btn">Отмена</div>
                </button>
            </form>
        </div>
    );
};

export default CostForm;