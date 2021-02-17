import { createContext, useReducer } from "react"
import TransactionReducer from './TransactionReducer'


let InitialTransactions = [
    { amount: +600, decs: "cash" },
    { amount: -400, decs: "expense" },
    { amount: +500, decs: "cash" },
    { amount: -400, decs: "expense" },
]


export const TransactionContext = createContext(InitialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, TransactionContext)


    function addTransaction(transobj) {

        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transobj.amount,
                decs: "cash",
            }
        })

    }

    return (

        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction: addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
}