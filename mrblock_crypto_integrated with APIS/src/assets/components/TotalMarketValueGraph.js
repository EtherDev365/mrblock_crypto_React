import React, { useState, useEffect } from "react";
import { Chart,google } from "react-google-charts";
import { APIKEY } from "../../Constants";
import TotalMarketValue from "./TotalMarketValue";

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`https://data-api.defipulse.com/api/v1/defipulse/api/GetHistory?api-key=${APIKEY.defipulse}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let valueArr = [[{ type: 'date', label: 'Year' },
        'Total Value Lock (USD)']];
        if(result){
            result.forEach(entry => {
                let arr = [];
                arr.push(new Date(entry.timestamp*1000));
                arr.push(entry.tvlUSD);
                valueArr.push(arr)
            });
        }
        setValue(valueArr);
      })
      .catch((error) => console.log(error));
  }, []);
  if(value){
    return (
        <div>
        <TotalMarketValue></TotalMarketValue>
        <Chart
        width={'100%'}
        height={'200'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={value}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: 'TVL (USD)',
          },
        /*   backgroundColor: '#000',
          colors:['#fff'],
          is3D: true */
        }}
        rootProps={{ 'data-testid': '1' }}
      /></div>
      );
  } else{
      return (
          <div></div>
      );
  }
  
};
