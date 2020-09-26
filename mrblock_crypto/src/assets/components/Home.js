import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import GaugeChart from "./GaugeChart";
import FearAndGreed from "./components/FearAndGreed";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      <Box width="500px" margin="25px">
        {" "}
        <Paper elevation={3}>
          <FearAndGreed> </FearAndGreed>
        </Paper>
        <Paper elevation={3}>
          <Feed> </Feed>{" "}
        </Paper>
      </Box>
    </div>
  );
}

export default App;
