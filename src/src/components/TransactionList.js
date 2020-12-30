import React, { useContext , useEffect, useState } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [data,setData] = useState([])
  useEffect(()=>{
        
    fetch("http://localhost:3000/transactions", {
        method : "GET",

    }).then(response =>   response.json())
    .then((data) => {
    setData(data)
  }).catch((err) => {
    console.log("error");
  })
})
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {data.map(transaction => 
        (<Transaction key={transaction.id} transaction={transaction} />))
        }
        
      </ul>
    </div>
      
  )
}