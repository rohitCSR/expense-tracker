import React, { createContext, useReducer } from 'react';
import { DELETE_TRANSACTION, ADD_TRANSACTION } from '../types';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const deleteTransactions = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addTransactions = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
