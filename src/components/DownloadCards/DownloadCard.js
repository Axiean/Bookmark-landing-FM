import React from "react";
import Dots from "../../images/bg-dots.svg";
import { Button } from "../Button";
function DownloadCard(props) {
  return (
    <div id="download_card">
      <img src={props.source} />
      <h3>{props.title} </h3>
      <h5> {props.des} </h5>
      <img src={dots} />
      <Button>Add and Install Extension</Button>
    </div>
  );
}

export default DownloadCard;
