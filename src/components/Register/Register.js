import '../Register/Register.css';
import { useEffect, useState } from 'react';
import RegisterAndLoginForm from '../RegisterAndLoginForm/RegisterAndLoginForm';

function Register(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  function handleChangeName(e) {
    const validName = /^[a-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError('Длина имени должна быть не менее 2 символов');
    } else if (e.target.value.length > 30) {
      setNameError('Длина имени должна должна быть не более 30 символов');
    } else if (!validName) {
      setNameError('Имя должно быть указано латиницей');
    } else {
      setNameError('');
    }
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value
    );

    if (!validEmail) {
      setEmailError('Неверный формат почты');
      props.setRegisterMessage("");
    } else {
      setEmailError('');
    }
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не менее 6 символов');
      props.setRegisterMessage("");
    } else {
      setPasswordError('');
    }
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegistration(name, email, password);
  }

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      !nameError &&
      !emailError &&
      !passwordError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, email, password, nameError, emailError, passwordError]);

    return (
      <RegisterAndLoginForm
        title='Добро пожаловать!'
        question='Уже зарегистрированы?'
        link='Войти'
        rout='/signin'
      >
        <p className='register__input-header'>Имя</p>
      <input 
        className='register__input'
        id='nameregister'
        type='text'
        value={name}
        minLength='2'
        maxLength='40'
        onChange={handleChangeName}
        autoComplete='on'
        required
      />
      <span className='form__span-error'>
        {nameError}
      </span>
      <p className='register__input-header'>E-mail</p>
      <input 
        className='register__input' 
        type='email'
        value={email}
        minLength='8'
        maxLength='40'
        onChange={handleChangeEmail}
        autoComplete='on'
        required
      />
      <span className='form__span-error'>
        {emailError}
      </span>
      <p className='register__input-header'>Пароль</p>
      <input 
        className='register__input' 
        type='password'
        value={password}
        minLength='6'
        maxLength='200'
        onChange={handleChangePassword}
        autoComplete='on'
        required
      />
      <span className='form__span-error'>
        {passwordError}
      </span>
      <button
            type="submit"
            className='button form__button'
            onClick={handleSubmit}
            disabled={!formValid}
      >
            Зарегистрироваться
      </button>
      <span className='form__span-error'>
        {props.isRegisterMessage}
      </span>
      </RegisterAndLoginForm> 
    );
  }

export default Register;