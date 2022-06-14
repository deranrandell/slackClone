import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyDD3_KLXs1nKKovYlXXQNqRuiPGXv6Mkoc",
  authDomain: "deranrandell-messenger.firebaseapp.com",
  projectId: "deranrandell-messenger",
  storageBucket: "deranrandell-messenger.appspot.com",
  messagingSenderId: "386960614265",
  appId: "1:386960614265:web:89c68471020a3a2d0fc5a8"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider } 
export default db