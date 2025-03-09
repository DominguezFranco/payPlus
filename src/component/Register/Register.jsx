import React from 'react'
import { useState} from 'react'
import { collection, addDoc} from 'firebase/firestore'
import db from '../../db/db.js'
import './register.css'
import validateForm from '../utils/validateForm.js'

const Register = ({onClose}) => {

  const [dataForm, setDataForm] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });

    const [idUsers, setIdUsers] = useState(null);

    const [error, setError] = useState('');


    const handleChangeInput = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const users = {
            username: dataForm.username,
            email: dataForm.email,
            password: dataForm.password}
        console.log(dataForm);
        

        const response = await validateForm(dataForm);
        

        if (response.status === 'success') {
          uploadUsers(users);
        }else {
            setError(response.message);
        }
      }

      const uploadUsers = (newUser) => {
        const usersRef = collection(db, 'users');
        addDoc(usersRef, newUser)
          .then((response) => {
            setIdUsers(response.id);
          })
      }

  return (
    <div className='login-overlay'>
    <div className='register-container'>
    <button className='btn-close' onClick={onClose}>X</button>
    <form className='register-form' onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {error && <p className="error">{error}</p>}
      <div>
          <label htmlFor="username">Nombre</label>
          <input
            type="text"
            id="username"
            name="username"
            value={dataForm.username}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            onChange={handleChangeInput}
            required
          />
        </div>
        <button type="submit" >Registrarse</button>
      </form>
    </div>
  </div>
  );
};


export default Register
