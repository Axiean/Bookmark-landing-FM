import React from "react";
import Dots from "../../images/bg-dots.svg";
import { Button } from "../Button";
import "./DownloadCard.css";
function DownloadCard(props) {
  return (
    <div className="download_card" id={props.id}>
      <img id="src_pic" src={props.source} />
      <h3>{props.title} </h3>
      <h5> {props.des} </h5>
      <img id="dots" src={Dots} />
      <Button id="card_btn" hero>
        Add and Install Extension
      </Button>
    </div>
  );
}

export default DownloadCard;
