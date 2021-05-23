import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    const handleSubmit = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user);
            const{displayName,email, photoURL} = result.user
            const signedInUser = {displayName,email, photoURL}
            setLoggedInUser(signedInUser);
            history.replace(from)
            // ...
        }).catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             const email = error.email;
             console.log(errorCode,errorMessage,email)
            // ...
        });
        
    }
   
    return (
        <div className="container-fluid my-5 mx-2">
            <div className="d-flex justify-content-center p-5">
                <h1 className="text-center text-info">Sign in With Google</h1>
                <button className="btn btn-success " onClick={handleSubmit}>Sign in </button>
            </div>
            
        </div>
    );
};

export default Login;