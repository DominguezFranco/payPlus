import React from 'react'
import { useState } from 'react'
import './register.css'

const Register = ({onClose}) => {

  const [dataForm, setDataForm] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });

    const [registros, setRegistros] = useState([]);

    const [error, setError] = useState('');


    const handleChangeInput = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = dataForm;
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        else if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        else if (!email.includes('@')) {
            setError('El correo electrónico no es válido');
            return;
        }

        else if (!name || !email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        else {
            setError('');

            onClose();
        }

        console.log(dataForm);

        const usuarioExistente = registros.find((registro) => registro.email === email);

        if (usuarioExistente) {
            setError('El correo electrónico ya está registrado');
            return;
        }

        const nuevoUsuario = { name, email, password };

        setRegistros([...registros, nuevoUsuario]);
       

};

  return (
    <div className='register-container'>
    <button className='btn-close' onClick={onClose}>X</button>
    <form className='register-form' onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {error && <p className="error">{error}</p>}
      <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={dataForm.name}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
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
            value={dataForm.confirmPassword}
            onChange={handleChangeInput}
            required
          />
        </div>
        <button type="submit" >Registrarse</button>
      </form>
    </div>
  );
};
   

export default Register
