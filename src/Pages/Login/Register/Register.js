import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // if (loading) {
    //     return <Loading></Loading>
    // }

    let errorLog;
    if (error) {
        errorLog = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        toast('Verification Mail Sent');
    }
    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Secure Password" required />
                </Form.Group>

                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {errorLog}
            {/* {verification} */}
            <p>Already have an account?<Link to="/login" className='text-primary text-decoration-none py-auto' onClick={navigateLogin}> Please Login</Link></p>
            <ToastContainer />
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;