import React, { useState } from 'react';
import './Login.css';



const Login = ({ onClose }) => {
    const [dataForm, setDataForm] = useState({
            username: '',
            password: '',
            email: ''
        });
    
    const [error, setError] = useState('');

    const handleChangeInput = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = dataForm;
    if (username === '' || password === '' || email === '') {
        setError('Please fill in all fields');
    } else {
        setError('');

        onClose();
    }
    console.log(dataForm);
    
    };

    
    return (
    <>
        <div className="login-overlay"></div>
        <div className="login-container">
            <button className="close-btn" onClick={onClose}>X</button>
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title" >Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={dataForm.username}
                        className='input-field'
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={dataForm.email}
                        className='input-field'
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        className='input-field'
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    </>
    );
};

export default Login;
