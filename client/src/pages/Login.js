import React from 'react'
import '../styles/RegisterStyle.css';
import { Input } from 'antd';
import { Form } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const onFinishHandler = (values) =>{
        console.log(values);
    }
    return(
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
                    <h3 className='text-center'>Login</h3>
                    <Form.Item label='Name' name='name'>
                        <Input type='text' required/>
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <Input type='email' required/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input type='password' required/>
                    </Form.Item>
                    <Link to='/register' className='m-3'>Not a user register here</Link>
                    <button className='btn btn-primary' type='submit'>Login</button>
                </Form>
            </div>
        </>
    );
}; 

export default Login;