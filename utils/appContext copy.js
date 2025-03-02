import React, { createContext, useContext, useReducer } from 'react';

// Create the context
const GlobalContext = createContext();

const actions = {
  SET_STATE: 'SET_STATE',
  UPDATE_FIELD: 'UPDATE_FIELD',
  RESET: 'RESET',
};

// Initial state
const initialState = {
  name: '',
  email: '',
  error: false,
  date: null,
  count: 0,
  // Add more fields as needed
};

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    case actions.UPDATE_FIELD:
      return { ...state, [action.field]: action.payload };
    case actions.RESET:
      return initialState;
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Generic update function
  const updateField = (field, value) => {
    dispatch({ type: actions.UPDATE_FIELD, field, payload: value });
  };
  
  
  // For updating multiple fields
  const updateMultiple = (updates) => {
    dispatch({ type: actions.SET_STATE, payload: updates });
  };
  
  // Reset everything
  const resetState = () => dispatch({ type: actions.RESET });

  return (
    <GlobalContext.Provider 
      value={{
        state,
        updateField, // Generic function
        updateMultiple,
        resetState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalState = () => useContext(GlobalContext);