import React, { useState } from "react";
import FPic1 from "../../images/illustration-features-tab-1.svg";
import FPic2 from "../../images/illustration-features-tab-2.svg";
import FPic3 from "../../images/illustration-features-tab-3.svg";
import { Button } from "../Button";
import "./FeatureBox.css";
function FeaturesBox() {
  const [pic, setPic] = useState(FPic2);
  const picHandler = (e) => {
    setPic(e.target.id);
  };

  return (
    <div id="feature_box">
      <div id="radiobtn_box">
        <input id="simple" value="simple" type="radio" name="feature_radio" />
        <label id={FPic1} onClick={picHandler} htmlFor="simple">
          Simple Bookmarking
        </label>
        <input id="speady" value="speady" type="radio" name="feature_radio" />
        <label id={FPic2} onClick={picHandler} htmlFor="speady">
          {" "}
          Speady Searching{" "}
        </label>
        <input id="easy" value="easy" type="radio" name="feature_radio" />
        <label id={FPic3} onClick={picHandler} htmlFor="easy">
          Easy Sharing
        </label>
      </div>
      <div id="features_container">
        <img id="feature_pic" src={pic}></img>
        <div id="feature_info">
          <h2>Intelligent Search</h2>
          <p>
            This application easy in using. All you need is to insert your
            ‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’
            values. Also you can click the button to copy result.
          </p>
          <Button id="feature_btn">More Info</Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBox;
