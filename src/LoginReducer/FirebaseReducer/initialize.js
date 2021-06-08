import firebase from 'firebase';
import firebaseConfig from '../../config';

const FirebaseInitialized = firebase.initializeApp(firebaseConfig);

export default FirebaseInitialized;