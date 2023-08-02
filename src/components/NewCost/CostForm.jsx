import React from 'react';
import './CostForm.css';

const CostForm = () => {
    return (
        <div className="cost-form">
            <form>
                <div className="cost-form__control">
                    <label>Название</label>
                    <input type="text"/>
                </div>
                <div className="cost-form__control">
                    <label>Название</label>
                    <input type="number" step="0.01" min="0.01"/>
                </div>
                <div className="cost-form__control">
                    <label>Название</label>
                    <input type="date" max="2023-08-02"/>
                </div>
                <div type="submit" className="cost-form__actions">
                    <div className="cost-form__btn">Добавить расход</div>
                </div>
            </form>
        </div>
    );
};

export default CostForm;