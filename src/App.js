
import Item from './components/Item';

function App() {
  const expenses = [
    {id:0,title:'Supermarket',amount: 450, date: new Date(2023,6,20)},
    {id:1,title:'Restaurant',amount: 900, date: new Date(2023,6,22)},
    {id:2,title:'Gas Station',amount: 489, date: new Date(2023,6,25)},
    {id:3,title:'Clothing Store',amount: 830, date: new Date(2023,6,29)},
  ];


  return (
    <div >
      {expenses.map((expense) =>(
        <Item
        id = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date.toDateString()}
          
        />
      ))}


    </div>
  );
}

export default App;
