import React from "react";
import Interstellar from "../../img/carousel/intertellar.jpg";
import Paper from "@material-ui/core/Paper";
import FearAndGreed from "../FearAndGreed";

class First extends React.Component {
  render() {
    const interstellar = {
      background: `url(${Interstellar})`,
    };
    return (
      <div>
        <coingecko-coin-heatmap-widget height="400" width="100%" locale="en" vce-ready="" />
      </div>
    );
  }
}

export default First;
