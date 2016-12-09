import Firebase from 'firebase';
import * as API from '../api/RestAPI';

import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import LoginForm from '../components/LoginForm';
import {signin, signout} from '../actions/login';
import {reset} from '../actions/counter';

const mapStateToProps = (state) => {
    return {user: state.login.user, error: state.login.error};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (username, password) => {
            API.signin(username, password).then(response => {
                if (response.signedIn) {
                    const user = response.user.username;
                    localStorage.setItem('user', user);
                    dispatch(signin(user));
                    browserHistory.push('/count');
                } else {
                    const error = response.message;
                    dispatch(signin(null, error));
                }
            });
        },
        onGoogleSignIn: () => {
            var config = {
                apiKey: "AIzaSyCggQWwXBEBoOxdxZSKtttdEXlxKr7DrwQ",
                authDomain: "dev-redux-f4d1b.firebaseapp.com",
                databaseURL: "https://dev-redux-f4d1b.firebaseio.com",
                storageBucket: "dev-redux-f4d1b.appspot.com",
                messagingSenderId: "1016976849868"
            };

            const firebase = Firebase.initializeApp(config);
            const provider = new Firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');

            firebase.auth().signInWithPopup(provider)
            .then(user => {
                const googleUser = user.google.displayName;
                localStorage.setItem('user', googleUser);
                dispatch(signin(googleUser, null));
                browserHistory.push('/count');
            })
            .catch(console.error);
        },
        onSignUp: (username, password) => {
            API.signup(username, password).then(response => {
                if (response.signedIn) {
                    const user = response.user.username;
                    localStorage.setItem('user', user);
                    dispatch(signin(user, null));
                    browserHistory.push('/count');
                } else {
                    const error = response.message;
                    dispatch(signin(null, error));
                }
            });
        },
        onSignOut: () => {
            localStorage.clear();
            dispatch(signout(null));
            dispatch(reset());
        }
    };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Login;
