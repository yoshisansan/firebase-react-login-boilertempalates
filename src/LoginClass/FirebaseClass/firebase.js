
class Firebase {
  constructor(firebaseInitialized){
    if(!firebaseInstance){
        this.app = firebaseInitialized;
        this.auth = firebaseInitialized.auth();
        // this.db = firebaseInitialized.db();
        this.functions = firebaseInitialized.functions();
        this.storage = firebaseInitialized.storage();
      }
    }

  emailLogin = async (email, password) => {
    const auth = await this.auth.signInWithEmailAndPassword(
      email,
      password
    );

    return auth;
  }

  logout = async() => {
    await this.auth.signOut();
  }

}

let firebaseInstance = false;
const getFirebaseInstance = (firebaseInitialized) => {
  if (!firebaseInstance && firebaseInitialized) {
    firebaseInstance = new Firebase(firebaseInitialized);

    return firebaseInstance;
  } else if (firebaseInstance) {

    return firebaseInstance;
  } else {

    return null;
  }
}

export default getFirebaseInstance;