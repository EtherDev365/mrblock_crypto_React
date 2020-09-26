import React, { useState, useEffect } from "react";
import { APIKEY } from "../../Constants";

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`/v1/metrics/derivatives/futures_volume_daily_latest?a=BTC&api_key=${APIKEY.glassnode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setValue(result['daily_volume']['binance']);
      })
      .catch((error) => console.log(error));
  }, []);
  if(value){
    return (
        
        <div style={{fontSize:'16px',fontWeight:'bold',color:'#000'}}>
          Daily Volume: <br/> {value}
        </div>
      );
  } else{
      return (
          <div></div>
      );
  }
  
};
