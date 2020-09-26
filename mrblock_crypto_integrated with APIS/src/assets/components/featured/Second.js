import React from "react";
import Interstellar from "../../img/carousel/intertellar.jpg";
import EnhancedTable from "../EnhancedTable";
import _default from 'base64-cryptocurrency-icons';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  fixedTwoFormat = (x) => Number.parseFloat(x).toFixed(3);
  loadCurrencies(){

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
  
              }
              list.push(curr)
            });
          }
          this.setState({
            isLoaded: true,
            items: list
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  componentDidMount() {
      this.loadCurrencies = this.loadCurrencies.bind(this)
      this.loadCurrencies();
  }


  render() {
    const { error, isLoaded, items } = this.state;

    const interstellar = {
      background: `url(${Interstellar})`,
    };
 
    if(items && items.length){
      return (
        <EnhancedTable input={items}></EnhancedTable>
      );
    } else{
      return (
        <div>Loading</div>
      );
    }
    
  }
}

export default Second;