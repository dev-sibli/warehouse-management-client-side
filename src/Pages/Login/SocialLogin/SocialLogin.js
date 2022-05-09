import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/login/google-logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorDetails;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorDetails = <p className='text-danger'>Warning: {error?.message}</p>
    }
    return (
        <div>
            {errorDetails}
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-dark w-100 d-block mx-auto '>
                <img src={google} alt="" />
                <span>Sign in With Google</span></button>
        </div>
    );
};

export default SocialLogin;