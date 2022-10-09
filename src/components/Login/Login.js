import '../Login/Login.css';
import { useEffect, useState } from 'react';
import RegisterAndLoginForm from '../RegisterAndLoginForm/RegisterAndLoginForm';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  function handleChangeEmail(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value
    );

    if (!validEmail) {
      setEmailError('Неверный формат почты');
    } else {
      setEmailError('');
    }
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не менее 6 символов');
    } else {
      setPasswordError('');
    }
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAuthorization(email, password);
  }

  useEffect(() => {
    if (
      email &&
      password &&
      !emailError &&
      !passwordError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password, emailError, passwordError]);

    return (
      <RegisterAndLoginForm
        title='Рады видеть!'
        question='Ещё не зарегистрированы?'
        link='Регистрация'
      >
      <p className='login__input-header'>E-mail</p>
      <input 
        className='login__input' 
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
      <p className='login__input-header'>Пароль</p>
      <input 
        className='login__input' 
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
            Войти
        </button>
      </RegisterAndLoginForm> 
    );
  }

export default Login;


// return (
//   <div className='login'>
//     <div className='login__box-header'>
//       <img className='login__logo' src={logo} alt='Лоотип'/>
//       <p className='login__header'>Рады видеть!</p>
//     </div>
//     <p className='login__input-header'>E-mail</p>
//     <input className='login__input' type="email" />
//     <p className='login__input-header'>Пароль</p>
//     <input className='login__input' type="password" />
//     <button className='button login__button' type='button'>Войти</button>
//     <p className='login__text-link'>Ещё не зарегистрированы?<Link to='/signup'className='link login__link'>Регистрация</Link></p>
//   </div>
// );