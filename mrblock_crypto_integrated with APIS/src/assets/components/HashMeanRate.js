import React, { useState, useEffect } from "react";
import { APIKEY } from "../../Constants";

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`/v1/metrics/mining/hash_rate_mean?a=BTC&api_key=${APIKEY.glassnode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setValue(result[result.length-1]['v']);
      })
      .catch((error) => console.log(error));
  }, []);
  if(value){
    return (
        
        <div style={{fontSize:'16px',fontWeight:'bold',color:'#000'}}>
          Hash Rate Mean:<br/> {value}
        </div>
      );
  } else{
      return (
          <div></div>
      );
  }
  
};
