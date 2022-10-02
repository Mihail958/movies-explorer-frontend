import '../Main/Main.css';
import MainHeader from '../MainHeader/MainHeader';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';


function Main() {
    return (
      <div>
        <MainHeader />
        <main>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer />
      </div>
    );
  }

export default Main;