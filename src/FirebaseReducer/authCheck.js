import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from './firebaseStore';
import { Redirect } from 'react-router-dom';
import FirebaseInitialized from './initialize';
import LoadingOverlay from 'react-loading-overlay';

const AuthCheck = ({ children }) => {
  const { state, dispatch } = useContext(FirebaseContext);
  const [isAuthCheck, setIsAuthCheck] = useState(false);

  const logCheck = async () => {
    FirebaseInitialized.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await dispatch({ type: 'LOGIN', payload: user });
      }
      setIsAuthCheck(true);
    });
  };

  useEffect(() => {
    logCheck();
    // eslint-disable-next-line
  }, []);

  if (isAuthCheck) {
    if (state) {
      return children;
    } else {
      return <Redirect to="/signin" />;
    }
  } else {
    return (
      <LoadingOverlay active={true} spinner text="Loading...">
        <div style={{ height: '100vh', width: '100vw' }}></div>
      </LoadingOverlay>
    );
  }
};

export default AuthCheck;
