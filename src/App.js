import CostItems from "./components/Costs/CostItems";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";
import Diagram from "./components/Diagram/Diagram";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2023, 0, 1),
        title: 'Заголовок',
        amount: 9999.99
    },
    {
        id: 'c2',
        date: new Date(2023, 1, 1),
        title: 'Заголовок 2',
        amount: 229
    },
    {
        id: 'c3',
        date: new Date(2023, 2, 1),
        title: 'Заголовок 3',
        amount: 5551.99
    }
];

const App = () => {

    const [cost, setCost] = useState(INITIAL_COSTS);

    const addCostHandler = (costData) => {
        setCost((prevCost) => {
            return [costData, ...prevCost];
        })
    }

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler}/>
            <CostItems list={cost}/>
        </div>
    );
}

export default App;
