import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBcW8OkeZrG-2fVqPyvkBCXfaIM_fFzNI8",
  authDomain: "portal-resource.firebaseapp.com",
  projectId: "portal-resource",
  storageBucket: "portal-resource.appspot.com",
  messagingSenderId: "459932923016",
  appId: "1:459932923016:web:feb2c527f58f746d455b3d"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;
