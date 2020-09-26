import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { APIKEY } from "../../Constants";


export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`/v1/metrics/indicators/stock_to_flow_ratio?a=BTC&api_key=${APIKEY.glassnode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
            let valueArr = [[{ type: 'date', label: 'Time' },
          'Stock to flow ratio']];
          if(result){
              result.forEach(entry => {
                  let arr = [];
                  arr.push(new Date(entry.t*1000));
                  arr.push(entry['o']['ratio']);
                  valueArr.push(arr)
              });
          }
          setValue(valueArr);
      })
      .catch((error) => console.log(error));
  }, []);
  if(value){
    return (
      <Chart
      width={'100%'}
      height={'150px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={value}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: ' Stock to Flow Ratio',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
      );
  } else{
      return (
          <div></div>
      );
  }
  
};
