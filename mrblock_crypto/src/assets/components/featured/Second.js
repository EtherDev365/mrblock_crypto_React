import React from "react";
import Interstellar from "../../img/carousel/intertellar.jpg";
import Paper from "@material-ui/core/Paper";
import FearAndGreed from "../FearAndGreed";

class Second extends React.Component {
  render() {
    const interstellar = {
      background: `url(${Interstellar})`,
    };
 
    return (
      <div className="carousel-item">
        <Paper elevation={3}>
          <FearAndGreed> </FearAndGreed>
        </Paper>
      </div>
    );
  }
}

export default Second;