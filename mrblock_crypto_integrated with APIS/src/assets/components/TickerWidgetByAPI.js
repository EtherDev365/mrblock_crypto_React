import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Ticker from 'react-ticker'
import { BreadcrumbDivider } from "semantic-ui-react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
    var count=0;
    value.forEach(coin=>{
        if(count<5){
            var iconMarkup = <span></span>
            if(coin.percentChange24h<0){
                iconMarkup = <span style={coin.percentChange24h<0 ? {color:'red',fontSize:'24px'} : {color:'#88D81A',fontSize:'24px'}}>
                       <KeyboardArrowDownIcon style={{marginRight:'-10px'}}/> {coin.percentChange24hStr}%
                </span>
            }else{
                iconMarkup =  <span style={coin.percentChange24h<0 ? {color:'red',fontSize:'24px'} : {color:'#88D81A',fontSize:'24px'}}>
                       <KeyboardArrowUpIcon style={{marginRight:'-10px'}}/> {coin.percentChange24hStr}%
                </span>
            }
            items.push(
              <div style={{fontSize:'18px',fontWeight:'bold',width:'20%',display:'inline-block'}}>
                {coin.symbol}/USD &nbsp;&nbsp;&nbsp;
                ${coin.price} 
                <br/>
                {iconMarkup}
              </div>
            )
        }
        count++;
        
    })
  return (
 /*    <Ticker speed={10}>
        {({ index }) => (
            <>
                
            </>
        )}
    </Ticker> */
    <div className = "tradingview-widget-container custom-tranding" style={{width:'100%',whiteSpace: "nowrap"}}>
        {items}
    </div>

    );
} else{
    return (
        <div></div>
    );
}

};
