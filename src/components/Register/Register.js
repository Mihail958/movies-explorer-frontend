import '../Register/Register.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='register'>
          <div className='register__box-header'>
            <img className='register__logo' src={logo} alt='Лоотип'/>
            <p className='register__header'>Добро пожаловать!</p>
          </div>
          <p className='register__input-header'>Имя</p>
          <input className='register__input'/>
          <p className='register__input-header'>E-mail</p>
          <input className='register__input' type="email" />
          <p className='register__input-header'>Пароль</p>
          <input className='register__input' type="password" />
          <button className='button register__button'>Зарегистрироваться</button>
          <p className='register__text-link'>Уже зарегистрированы?<Link to='/signin'className='link register__link'>Войти</Link></p>
        </div>
    );
  }

export default Register;