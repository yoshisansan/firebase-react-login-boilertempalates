import  { useState, useEffect } from 'react';
import config from '../config';
import getFirebaseInstance from './';
import firebase from 'firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const firebaseInitialized = firebase.initializeApp(config);
    const instance = getFirebaseInstance(firebaseInitialized);
    setFirebaseInstance(instance);
    instance.auth.onAuthStateChanged((userResult) => {
      if(userResult) {
        setUser(userResult);
      }
    });
    // eslint-disable-next-line
  },[]);

  return {
    user,
    firebaseInstance,
  }
};

export default useAuth;