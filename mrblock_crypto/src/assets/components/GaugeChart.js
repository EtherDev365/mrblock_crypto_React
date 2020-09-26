import React from "react";
import Chart from "react-google-charts";
export default ({ label, value }) => {
  return (
    <Chart
      width={500}
      height={500}
      chartType="Gauge"
      loader={<div>Loading Chart</div>}
      data={[
        ["Label", "Value"],
        [label, parseInt(value)],
      ]}
      options={{
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};
