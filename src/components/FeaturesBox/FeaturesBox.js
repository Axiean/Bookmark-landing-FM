import React, { useState } from "react";
import FPic1 from "../../images/illustration-features-tab-1.svg";
import FPic2 from "../../images/illustration-features-tab-2.svg";
import FPic3 from "../../images/illustration-features-tab-3.svg";
import Fade from "react-reveal/Fade";
import { Button } from "../Button";
import "./FeatureBox.css";
function FeaturesBox() {
  const [pic, setPic] = useState(FPic2);

  const picHandler = (e) => {
    setPic(e.target.id);
  };

  var title = "";
  var para = "";
  switch (pic) {
    case FPic1:
      title = "Bookmark in one click";
      para =
        "This application easy in using. All you need is to insert your‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’values. Also you can click the button to copy result.";
      break;
    case FPic2:
      title = "Intelligent Search";
      para =
        "This application easy in using. All you need is to insert your‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’values. Also you can click the button to copy result.";
      break;
    case FPic3:
      title = "Share your Bookmarks";
      para =
        " All you need is to insert your‘viewport width’ and ‘size in px’ and tap ‘calculate’ your new ‘vw’values. Also you can click the button to copy result.";
      break;
    default:
      title = "hi";
  }
  //  add this fun to render Fade,  each time chnage the  radio btn
  const FadeReveal = () => {
    return (
      <Fade>
        <div id="features_container">
          <img id="feature_pic" src={pic}></img>
          <div id="feature_info">
            <h2>{title}</h2>
            <p>{para}</p>
            <Button hero id="feature_btn">
              More Info
            </Button>
          </div>
        </div>{" "}
        <div id="feature_box_bg"></div>
      </Fade>
    );
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
      <FadeReveal />
    </div>
  );
}

export default FeaturesBox;
