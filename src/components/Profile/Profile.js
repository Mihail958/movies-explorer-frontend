import '../Profile/Profile.css';
import Header from '../Header/Header';


function Profile() {
    return (
      <div className='profile'>
        <Header />
        <section>
        <p className='profile__greeting'>Привет, Виталий!</p>
        <div className='profile__box-profile-info'>
            <div className='profile__profile-info'>
                <p className='profile__info'>Имя</p>
                <p className='profile__info'>Виталий</p>
            </div>
            <hr className='profile__line' />
            <div className='profile__profile-info'>
                <p className='profile__info'>E-mail</p>
                <p className='profile__info'>pochta@yandex.ru</p>
            </div>
        </div>
        <button className='button profile__button-edit'>Редактировать</button>
        <button className='button profile__button-exit'>Выйти из аккаунта</button>
        </section>
      </div>
    );
  }

export default Profile;