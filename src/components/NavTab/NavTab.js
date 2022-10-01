import '../NavTab/NavTab.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom'; 

function NavTab() {
    return (
        <div className='nav them__olive'>
            <img className='nav__logo' src={logo} alt='Лоотип'/>
            <div className='nav__text'>
                <Link to='/signup' className='link nav__registration'>Регистрация</Link>
                <Link to='/signin' className='link nav__enter'>Войти</Link>
            </div>
        </div>
    );
  }

export default NavTab;