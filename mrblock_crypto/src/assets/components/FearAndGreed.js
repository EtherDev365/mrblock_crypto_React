import React, { useState, useEffect } from "react";
import GaugeChart from "./GaugeChart";

export default ({}) => {
  const [value, setValue] = useState(10);
  const [label, setLabel] = useState(10);

  useEffect(() => {
    fetch(`https://api.alternative.me/fng/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setValue(response.data[0].value);
        setLabel(response.data[0].value_classification);
      })
      .catch((error) => console.log(error));
  }, [value, label]);
  return (
    <div>
      <GaugeChart label={label} value={value}></GaugeChart>
    </div>
  );
};
