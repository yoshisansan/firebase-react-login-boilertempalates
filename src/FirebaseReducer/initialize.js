import firebase from 'firebase';


const config = {
  "apiKey": process.env.REACT_APP_FIREBASE_APIKEY,
  "authDomain": process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  "projectId": "fir-login-boiler",
  "storageBucket": process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  "messagingSenderId": process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  "appId": process.env.REACT_APP_FIREBASE_APP_ID,
  "measurementId": process.env.REACT_APP_FIREBASE_MEASURE_ID
}

const FirebaseInitialized = firebase.initializeApp(config);

export default FirebaseInitialized;
