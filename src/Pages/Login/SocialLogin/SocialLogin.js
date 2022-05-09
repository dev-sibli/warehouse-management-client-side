import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/login/google-logo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
    }
    if (error) {
        console.log(error);
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-dark w-50 d-block mx-auto '>
                <img src={google} alt="" />
                <span>Sign in With Google</span></button>
        </div>
    );
};

export default SocialLogin;