import React, { useState } from 'react';
import './Login.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';


const Login = ({ onClose }) => {
    const [dataForm, setDataForm] = useState({
            password: '',
            keyword: ''
        });
    
    const [error, setError] = useState('');

    const handleChangeInput = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const { password, keyword } = dataForm;
    if (password === '' || keyword === '') {
        setError('Please fill in all fields');
    } else {
        setError('');
        checkUser();
    }
    console.log(dataForm);
    };
    
    const checkUser = async () => {
        const userRef = collection(db, 'users');
        const qEmail = query(userRef, where('email', '==', dataForm.keyword));
        const qUsername = query(userRef, where('username', '==', dataForm.keyword));
        
        getDocs(qEmail)
            .then((dataDb) => {
                const user = dataDb.docs.map((userDb) => {
                    return {id: userDb.id, ...userDb.data()};
                });
                console.log(user);
                if (user.length > 0) {
                    if (user[0].password === dataForm.password) {
                        onClose();
                    } else {
                        setError('Password incorrect');
                    }
                } else {
                    getDocs(qUsername)
                        .then((dataDb) => {
                            const user = dataDb.docs.map((userDb) => {
                                return {id: userDb.id, ...userDb.data()};
                            });
                            console.log(user);
                            if (user.length > 0) {
                                if (user[0].password === dataForm.password) {
                                    onClose();
                                } else {
                                    setError('Password incorrect');
                                }
                            } else {
                                setError('User not found');
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
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
                    <label>Email o Username</label>
                    <input
                        type="text"
                        name="keyword"
                        value={dataForm.keyword}
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
