import React from 'react';
import { StateProvider } from './FirebaseReducer/firebaseStore';
import SignInRedux from './SignInRedux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthCheck from './FirebaseReducer/authCheck';
import loggedInPage from './loggedInPageRedux';

const AppReducer = () => {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/signin" name="サインイン" exact component={SignInRedux} />
          {/* <Route path="/signin" name="サインイン" exact component={SignIn} /> */}
          <AuthCheck>
            <Route path="/" name="ダッシュボード" exact component={loggedInPage} />
          </AuthCheck>
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default AppReducer;
