import React, { useReducer, createContext} from 'react';
import contextReducer from './contextReducer';
const initialState = [];
export const ExpenseTrackerContext = createContext();
export const Provider = ({children}) =>{
    const [transactions, dispatcher] = useReducer(contextReducer, initialState);
    //Action creators
    const deleteTransaction = (id)=>{
          dispatcher({type : 'DELETE_TRANSACTION', payload: id})
    }
    const addTransaction = (transaction) =>{
        dispatcher({type: 'ADD_TRANSACTION', payload : transaction}); 
    }

    //starting from es6 if the key value pair have same names then it can represented by using only key value
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions}}> 
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

