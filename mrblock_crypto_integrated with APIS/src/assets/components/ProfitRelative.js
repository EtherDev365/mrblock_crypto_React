import React, { useState, useEffect } from "react";
import { Chart,google } from "react-google-charts";
import { APIKEY } from "../../Constants";


export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
      // change active_count to profilt_relative with full access
    fetch(`/v1/metrics/addresses/active_count?a=ETH&api_key=${APIKEY.glassnode}`, {
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
      <span style={{color:'#000'}}> Profit Relative </span>
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
            title: 'Profit relative ETH',
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
