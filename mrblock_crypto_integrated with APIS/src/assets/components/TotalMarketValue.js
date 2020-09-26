import React, { useState, useEffect } from "react";
import { Chart,google } from "react-google-charts";
import { APIKEY } from "../../Constants";

export default ({}) => {
  const [value, setValue] = useState(0); 
   useEffect(() => {
    fetch(`https://data-api.defipulse.com/api/v1/defipulse/api/MarketData?api-key=${APIKEY.defipulse}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if(result){
            let x = result.All.total/1000000000;
            let billionValue = Number.parseFloat(x).toFixed(2);
            setValue(billionValue+"B");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  if(value){
    return (
        <div style={{fontSize:'20px',fontWeight:'bold',color:'#000',backgroundColor:'#fff'}}>
            Total Market Value :  {value}
        </div>
        
      );
  } else{
      return (
          <div></div>
      );
  }
  
};
