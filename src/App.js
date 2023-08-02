import CostItems from "./components/Costs/CostItems";
import NewCost from "./components/NewCost/NewCost";

const cost = [
    {
        id: 1,
        date : new Date(2023, 0, 1),
        title : 'Заголовок',
        amount : 9999.99
    },
    {
        id: 2,
        date : new Date(2023, 1, 1),
        title : 'Заголовок 2',
        amount : 9
    },
    {
        id: 3,
        date : new Date(2023, 2, 1),
        title : 'Заголовок 3',
        amount : 1.99
    }
];


const App = () => {
    return (
        <div className="App">
            <NewCost/>
            <CostItems list={cost} />
        </div>
    );
}

export default App;
