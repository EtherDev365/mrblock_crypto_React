import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { APIKEY } from "../../Constants";

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`/v1/metrics/mining/hash_rate_mean?a=ETH&api_key=${APIKEY.glassnode}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((result) => {
      let valueArr = [[{ type: 'date', label: 'Time' },
      'Profit Relative']];
      if(result){
          result.forEach(entry => {
              let arr = [];
              arr.push(new Date(entry.t*1000));
              arr.push(entry.v);
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
       <span style={{color:'#000'}}> ETH Hash Rate Dificulty </span>
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
          title: ' Hash Rate Mean ETH',
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
