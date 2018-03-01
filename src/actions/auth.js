import * as firebase from 'firebase';
import {
  LOGIN, LOGOUT, SIGNIN
} from '../reducers/constants/constants'

const config = {
  apiKey: "AIzaSyDlXnMx91TpBL0ffia4tRAZVt860qqUe3I",
  authDomain: "beatmix-fb77a.firebaseapp.com",
  databaseURL: "https://beatmix-fb77a.firebaseio.com",
  projectId: "beatmix-fb77a",
  storageBucket: "beatmix-fb77a.appspot.com",
  messagingSenderId: "370179387024"
};
firebase.initializeApp(config);

export const login = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
      dispatch({ type: LOGIN, token: data.apiKey });
    })
    //TODO: catch
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
