import React from 'react'
import { useState} from 'react'
import { collection, query, where, getDocs, addDoc} from 'firebase/firestore'
import db from '../../db/db.js'
import './register.css'

const Register = ({ onClose }) => {
  const [users, setUsers] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const verificarEmailExistente = async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');

    const existe = await verificarEmailExistente(email);
    if (existe) {
      setMensaje('El correo electrónico ya está registrado');
      setCargando(false);
    } else {
      try {
        await addDoc(collection(db,'users'),{
          email: email,
          username: users,
          password: password,
        });
        setMensaje('Registro exitoso');
        setCargando(false);
      } catch (error) {
        setMensaje('Error al registrar el usuario' + error.message);
        setCargando(false);
      }
    }
  }













  // const [dataForm, setDataForm] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  //   confirmPassword: ''
  // });

  //   const [idUsers, setIdUsers] = useState(null);

  //   const [error, setError] = useState('');


  //   const handleChangeInput = (e) => {
  //       setDataForm({
  //           ...dataForm, [e.target.name]: e.target.value
  //       });
  //   };


  //   const handleSubmit = async (e) => {
  //       e.preventDefault();
  //       const users = {
  //           username: dataForm.username,
  //           email: dataForm.email,
  //           password: dataForm.password}
  //       console.log(dataForm);
        

  //       const response = await validateForm(dataForm)
        

  //       if (response.status === 'success') {
  //         uploadUsers(users)
  //       }else {
  //           setError(response.message);
  //       }
  //     }

  //     const uploadUsers = (newUser) => {
  //       const usersRef = collection(db, 'users');
  //       addDoc(usersRef, newUser)
  //         .then((response) => {
  //           setIdUsers(response.id);
  //         })
  //     }

  return (
    <div className='login-overlay'>
    <div className='register-container'>
    <button className='btn-close' onClick={onClose}>X</button>
    <form className='register-form' onSubmit={registrarUsuario}>
      <h2>Registro</h2>
      <div>
          <label htmlFor="username">Nombre</label>
          <input
            type="text"
            id="username"
            name="username"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={cargando}>
          {cargando ? "Cargando..." : "Registrarse"}
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  </div>
  );
};


export default Register
