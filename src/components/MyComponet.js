import { useState } from "react";
import './MyComponent.css'


function MyComponet(){

      const [title, setTitle] = useState('')
      const [amount, setAmount] = useState('')
      const [date, setDate] = useState('')

      const titleHanler = (e) =>{
            setTitle(e.target.value);

      }

      const amountHanler = (e) =>{
            setAmount(e.target.value);
      }

      const dateHanler = (e) =>{
            setDate(e.target.value);
      }

      const submitHandle = (e) =>{
            e.preventDefault();

            console.log('Expense Form Submited');
            console.log( title);
            console.log( amount);
            console.log( date);

            setTitle('')
            setAmount('')
            setDate('')

      }


      return(
            <form onSubmit={submitHandle}>
                  <div>
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleHanler}></input>
                  </div>

                  <div>
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={amountHanler}></input>
                  </div>

                  <div>
                        <label>Date</label>
                        <input type="date"value={date} onChange={dateHanler} min='2023-01-01' max='2023-12-31'></input>
                  </div>

                  <button type="submit">Add Expenses</button>

            </form>
      )
}


export default MyComponet;