import React, { useContext } from 'react';
import { TransactionContext } from './TransactinContext'

function Chil() {

    const {Transaction} = useContext(TransactionContext)
    console.log(Transaction)
    return (

        <div>

            <h1>Expense Tracker</h1>

            <h3>Your Balance <br /> $26.00</h3>

            <div>
                <div className="BalanceConataier">
                    <div className="INCOME">
                        <h3>Your YourIcome <br /> $26.00</h3>
                    </div>
                    <div className="EXPENSE">
                        <h3>Your Expense <br /> $26.00</h3>
                    </div>
                </div>

                <h3>History</h3><hr />

                <ul>
                    {Transaction.map((transObj, index) => {
                        console.log(transObj)
                        return (
                            <li key={index}>
                                <span >{transObj.amount} </span>
                                <span>{transObj.decs}</span>
                            </li>
                        )
                    })}
                </ul>

                <h3>
                    Add new transaction
                </h3><hr />
                <from>
                    <label>Text<br />
                        <input type="text" placeholder="Type discription" required /><br /></label>
                    <label>Amount<br />
                        <input type="number" placeholder="Enter Amount" required /></label><br />
                    <input type="submit" value="Add Transaction" />
                </from>

            </div>

        </div>

    )
}

export default Chil;