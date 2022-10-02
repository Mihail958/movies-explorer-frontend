import '../Login/Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
          <div className='login__box-header'>
            <img className='login__logo' src={logo} alt='Лоотип'/>
            <p className='login__header'>Рады видеть!</p>
          </div>
          <p className='login__input-header'>E-mail</p>
          <input className='login__input' type="email" />
          <p className='login__input-header'>Пароль</p>
          <input className='login__input' type="password" />
          <button className='button login__button'>Войти</button>
          <p className='login__text-link'>Ещё не зарегистрированы?<Link to='/signup'className='link login__link'>Регистрация</Link></p>
        </div>
    );
  }

export default Login;