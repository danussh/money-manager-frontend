import React, {useContext , useEffect , useState} from 'react';
import { GlobalContext, } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  const [data,setData] = useState([])

  const sign = transaction.amount < 0 ? '-' : '+';

const deleteTransaction = async(e) => {
  //e.preventDefault();
  try{
    fetch("http://localhost:3000/transactionss", {
        method : "DELETE",

    }).then(res => res.json())
    .then((data) => {
      console.log("delete")
      setData(data)
  }).catch((err) => {
    console.log("error");
  }) 
  }catch (error){
    console.log(error);
}
}

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      
      {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}