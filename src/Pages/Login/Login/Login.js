import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorLog;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorLog = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container '>
            <div className='w-50 mx-auto'><Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Your Password" required />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
                {errorLog}
                <p>New to TV Star? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>
                <SocialLogin></SocialLogin></div>
        </div>
    );
};

export default Login;