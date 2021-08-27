import React from "react";
import { Button } from "../components/Button";
import DownloadCard from "../components/DownloadCards/DownloadCard";
import AccardionFAQ from "../components/FAQ/AccardionFAQ";
import FeaturesBox from "../components/FeaturesBox/FeaturesBox";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroPic from "../images/illustration-hero.svg";
import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div id="hero_info_box">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            This application easy in using. All you need is to insert your
            ‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’
            values. Also you can click the button to copy result.
          </p>
          <div id="hero_btns">
            <Button hero>Get it on Chrome</Button>
            <Button id="btn2">Get it on Firefox</Button>
          </div>
        </div>
        <div id="hero_pic_box">
          <img src={HeroPic} alt="bookmark hero part pic" />
          <div id="hero_pic_bg"></div>
        </div>
      </section>
      <section id="features">
        <h2 id="features_title"> Features </h2>
        <p id="features_des">
          This application easy in using. All you need is to insert your
          ‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’
          values. Also you can click the button to copy result.
        </p>
        {/* <div id="features_box"></div> */}
        <FeaturesBox />
      </section>
      <section id="downloads">
        <h2 id="downloads_title"> Download the estension </h2>
        <p id="downloads_des">
          This application easy in using. All you need is to insert your
          ‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’
          values. Also you can click the button to copy result.
        </p>
        <div id="cards_box">
          <DownloadCard
            id="card1"
            source={Chrome}
            title="Add to Chrome"
            des="minimum version 9.4"
          />
          <DownloadCard
            id="card2"
            source={Firefox}
            title="Add to Firefox"
            des="minimum version 9"
          />
          <DownloadCard
            id="card3"
            source={Opera}
            title="Add to Opera"
            des="minimum version 6.8"
          />
        </div>
      </section>
      <section id="faq">
        <h2 id="faq_title"> Frerquently Asked Questions</h2>
        <p id="faq_des">
          This application easy in using. All you need is to insert your
          ‘viewport width’ .
        </p>
        <AccardionFAQ />
        <Button hero id="faq_btn">
          More Info
        </Button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
