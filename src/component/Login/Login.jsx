import React, { useState } from 'react';
import './Login.css';

const Login = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
        setError('Please fill in all fields');
    } else {
        setError('');
        onClose();
    }
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
                        value={username}
                        className='input-field'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        className='input-field'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    </>
    );
};

export default Login;
