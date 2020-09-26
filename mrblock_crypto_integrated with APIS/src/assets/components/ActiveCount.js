import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { APIKEY } from "../../Constants";


export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
      const promises = Promise.all([
        fetch('/v1/metrics/addresses/active_count?a=BTC&api_key='+APIKEY.glassnode),
        fetch('/v1/metrics/addresses/active_count?a=ETH&api_key='+APIKEY.glassnode)
      ]);

      promises
        .then((res) => 
         Promise.all(res.map(r => r.json()))
        ).then((results)=>{
          if(results){
            let btcResult = results[0];
            let ethResult = results[1];
            let valueArr = [[{ type: 'date', label: 'Time' },
             'BTC','ETH']];
            if(ethResult && btcResult){
              //var count =0;
              for(var count = 0; count<500;count++){
                let arr = [];
                arr.push(new Date(btcResult[btcResult.length-1-count].t))
                arr.push(btcResult[btcResult.length-1-count].v)
                arr.push(ethResult[ethResult.length-1-count].v)
                valueArr.push(arr);
              }
              setValue(valueArr);
            }
          }
        }).catch((error) => console.log(error));

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
          title: ' BTC VS ETH',
        },
      /*   backgroundColor: '#000',
        colors:['#fff'],
        is3D: true */
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
