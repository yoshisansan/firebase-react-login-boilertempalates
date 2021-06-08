import React from 'react';

const FirebaseContext = React.createContext({
  firebase: null,
  user: null,
  userNutritionCal: null,
  userProfileData: null,
  loading: false,
  refreshFunc: undefined,
});

export default FirebaseContext;
