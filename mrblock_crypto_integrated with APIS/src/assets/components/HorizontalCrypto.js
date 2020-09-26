import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Ticker from 'react-ticker'
import _default from 'base64-cryptocurrency-icons';

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true")
    .then(res => res.json())
    .then(
      (result) => {
        let list = [];
        if(result){
          result.forEach(currency => {
            let curr = {
                rank:currency.market_cap_rank,
                icon:_default[currency.symbol.toUpperCase()]?_default[currency.symbol.toUpperCase()].icon:'',
                symbol:currency.symbol.toUpperCase(),
                name:currency.name,
                marketCap:currency.market_cap,
                price:currency.current_price,
                volume24h:currency.high_24h,
                circulatingSupply:currency.circulating_supply,
                percentChange24h:currency.price_change_percentage_24h,
                percentChange24hStr:parseFloat(currency.price_change_percentage_24h).toFixed(2),
            }
            list.push(curr)
          });
        }

        setValue(list);
        
      })
    .catch((error) => console.log(error));
}, []);
if(value){
    let items = [];
    value.forEach(coin=>{
        items.push(
            <span style={{marginRight:'20px',fontSize:'18px'}}>
                <img src={coin.icon} style={{height:'18px',width:'18px'}}></img>&nbsp;
                {coin.name}({coin.symbol}) &nbsp;
                ${coin.price} &nbsp;
                <span style={coin.percentChange24h<0 ? {color:'red'} : {color:'#88D81A'}}>
                        {coin.percentChange24hStr}%
                </span>

            </span>
            )
    })
  return (
    <Ticker speed={10}>
        {({ index }) => (
            <>
                <div className = "crapto-none-move" style={{width:'100%',height:'36px',whiteSpace: "nowrap"}}>
                    {items}
                </div>
            </>
        )}
    </Ticker>
    
    );
} else{
    return (
        <div></div>
    );
}

};
