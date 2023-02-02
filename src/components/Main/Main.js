import '../Main/Main.css';
import React from "react";
import MainHeader from '../MainHeader/MainHeader';
import Header from '../Header/Header'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';


function Main(props) {
    return (
      <div className="main">
        {props.loggedIn ? (
          <Header className='them__olive'/>
        ) : (
          <MainHeader />
        )}
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
