// 参考：https://qiita.com/reika_i/items/3e3186ea4f3882f9c90dより
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SignInForm from '../Components/SignInForm.js';
import { FirebaseContext } from './FirebaseReducer/firebaseStore';
import FirebaseInitialized from './FirebaseReducer/initialize';

const SignInRedux = () => {
  const { dispatch } = useContext(FirebaseContext);
  const history = useHistory();
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (e.type !== 'click') return;

    try {
      const auth = await FirebaseInitialized.auth().signInWithEmailAndPassword(
        formdata.email,
        formdata.password
      );
      if (auth.user) {
        console.log('hello signin');
        await dispatch({ type: 'login', payload: { user: auth.user } });
        history.push('/');
      } else {
        console.log('error');
      }
    } catch (e) {
      console.log(`failed : ${e}`);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignInForm handleSignIn={handleSignIn} handleOnChange={handleOnChange} formdata={formdata} />
  );
};

export default SignInRedux;
