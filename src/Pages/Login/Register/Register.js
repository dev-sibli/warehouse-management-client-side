import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='container w-50 mx-auto mt-3'>
            <Form>
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

                <Button className='w-100 mb-3' variant="dark" type="submit">
                    Register
                </Button>
            </Form>

            <p>Already have an account?<Link to="/login" className='text-primary text-decoration-none py-auto'> Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;