import React from 'react';
import Child from './Component/Child'
import {TransactionProvider} from './Component/TransactinContext'

function App(params) {
    return (
        <>
        <TransactionProvider>
            <Child />
        </TransactionProvider>
        </>
    )
}

export default App;