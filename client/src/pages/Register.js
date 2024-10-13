import React from 'react';
import '../styles/RegisterStyle.css';
import { Input } from 'antd';
import { Form } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {

    const onFinishHandler = (values) =>{
        console.log(values);
    }

    return(
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
                    <h3 className='text-center'>Register</h3>
                    <Form.Item label='Name' name='name'>
                        <Input type='text' required/>
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <Input type='email' required/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input type='password' required/>
                    </Form.Item>
                    <Link to='/login' className='m-3'>Already user login here</Link>
                    <button className='btn btn-primary' type='submit'>Register</button>
                </Form>
            </div>
        </>
    );
}; 

export default Register;