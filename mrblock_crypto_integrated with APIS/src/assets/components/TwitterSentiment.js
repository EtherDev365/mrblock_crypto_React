import React, { useState, useEffect } from "react";
import GaugeChart from "./GaugeChart";

export default ({}) => {
  const [value, setValue] = useState(10);
  const [token, setToken] = useState(0);

  const [label, setLabel] = useState(10);

  useEffect(() => {
    fetch(`https://api.coinmetro.com/open`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setToken(response.token);
      })
      .catch((error) => console.log(error));
    }
      fetch(`https://api.coinmetro.com/open`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setToken(response.token);
      })
      .catch((error) => console.log(error));
  }, [value, label]);
  return (
    <div>
      <GaugeChart label={label} value={value}></GaugeChart>
    </div>
  );
};
