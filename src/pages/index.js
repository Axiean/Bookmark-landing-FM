import React from "react";
import { Button } from "../components/Button";
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
    </div>
  );
}

export default Home;
