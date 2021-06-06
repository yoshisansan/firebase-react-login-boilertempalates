import React, { createContext, useReducer } from 'react';

const initialState = { user: null };
export const FirebaseContext = createContext({ initialState });

// appReducer.js用
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        if (action.payload) {
          return { user: action.payload.user };
        }
        return state;
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  });
  return (
    <FirebaseContext.Provider value={{ state, dispatch }}>{children}</FirebaseContext.Provider>
  );
};
