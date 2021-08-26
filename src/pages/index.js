import React from "react";
import { Button } from "../components/Button";
import FeaturesBox from "../components/FeaturesBox/FeaturesBox";
import Header from "../components/Header/Header";
import HeroPic from "../images/illustration-hero.svg";
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
        <div id="features_box"></div>
      </section>
      <FeaturesBox />

      <h1 style={{ fontSize: "60px", textAlign: "center" }}>
        Still Coding...!
      </h1>
    </div>
  );
}

export default Home;
