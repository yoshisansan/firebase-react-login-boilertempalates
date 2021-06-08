import React from 'react';
import SignInClass from './SignInClass';
import { FirebaseContext, useAuth } from './FirebaseClass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loggedInPage from './loggedInPageClass';

const AppClass = () => {
  const { user, firebaseInstance } = useAuth();

  return (
    <FirebaseContext.Provider value={{user, firebaseInstance}}>
      <Router>
        <Switch>
          <Route path="/signin" name="サインイン" exact component={SignInClass} />
          {user &&
            <Route path="/" name="ダッシュボード" exact component={loggedInPage} />
          }
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
};

export default AppClass;
