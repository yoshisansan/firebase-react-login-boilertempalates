// 参考：https://qiita.com/reika_i/items/3e3186ea4f3882f9c90dより
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SignInForm from '../Components/SignInForm.js';
import { FirebaseContext } from './FirebaseClass';

const SignInClass = () => {
  const { user, firebaseInstance } = useContext(FirebaseContext);
  const history = useHistory();
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (e.type !== 'click') return;
    try {
      const auth = await firebaseInstance.emailLogin(
        formdata.email,
        formdata.password
      );
      if (auth.user) {
        console.log('login!');
        history.push("/");
      }
    } catch(e) {
      console.log(`ERROR: ${e}`);
    }
  }

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

export default SignInClass;
