import React from "react";
import Interstellar from "../../img/carousel/intertellar.jpg";
import Paper from "@material-ui/core/Paper";
import FearAndGreed from "../FearAndGreed";
import { Chart,google } from "react-google-charts";
import TechnicalAnalysis from 'react-tradingview-technical-analysis';
import HashMeanRate from "../HashMeanRate";
import ActiveCount from "../ActiveCount";
import DailyVolume from "../DailyVolume";
import StockRatio from "../StockRatio";
import { APIKEY } from "../../../Constants";


class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      hashRateMean:'',
      activeCount:'',
      dailyVolume:'',
      stockToFlowRatio:''
    };
  }


  loadCurrencies(){

    fetch("https://api.cryptorank.io/v1/currencies?api_key="+APIKEY.cryptorank)
      .then(res => res.json())
      .then(
        (result) => {
          let treeMapData = [];
          treeMapData.push([
            'Currency',
            'Parent',
            'Price',
            'Percentage Change',
          ])
          treeMapData.push(['Crypto Currencies', null, 0, 0]);
          var count = 0;
          if(result.data){
            result.data.forEach(currency => {
              if(count<12){
                let keyC = currency.symbol+", ( $"+this.fixedTwoFormat(currency.values.USD.price)+" )  ( "+this.signNumber(currency.values.USD.percentChange24h+"% )");
                let treeMapItem = [];
                treeMapItem.push(keyC);
                treeMapItem.push('Crypto Currencies');
                treeMapItem.push(0);
                treeMapItem.push(0);
                treeMapData.push(treeMapItem)
                treeMapData.push(['USD'+currency.symbol,keyC,this.getFloatValue(currency.rank,currency.values.USD.price),parseFloat(currency.values.USD.percentChange24h)]);  
              }
              count++;
             });
          }
          
          this.setState({
            isLoaded: true,
            items: treeMapData
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
  fixedTwoFormat = (x) => Number.parseFloat(x).toFixed(2);
  getFloatValue = (x,y) => {
    let value =  10/Number.parseFloat(x)
    return value
  }
  
  signNumber = (x) =>{
    let value = parseFloat(x+'');
    if(value>0){
        return '+'+value;
    } else{
      return x;
    }

  }
  render() {
    const { error, isLoaded, items , hashRateMean, activeCount, dailyVolume, stockToFlowRatio} = this.state;
    const interstellar = {
      background: `url(${Interstellar})`,
    };
    console.log(items)
    if (items && items.length ){
      return (

        <table style={{height:'100%',width:'100%'}}>
          <tr>
            <td style={{height:'99%',width:'60%'}}>
                  <Chart
                width={'100%'}
                height={'100%'}
                chartType="TreeMap"
                loader={<div>Loading Chart</div>}
                data={items}
                options={{
                  minColor: '#6AA213',
                  midColor: '#EB6F74',
                  maxColor: '#EB6F74',
                  headerHeight: 15,
                  fontColor: 'white',
                  fontSize:'20',
                  bold:true,
                  showScale: true,
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </td>
            <td style={{height:'99%',width:'40%'}}>
               
              <table style={{height:100+'%',width:100+'%'}}> 
              <tr>
                <td style={{backgroundColor:'#EB6F74',border:'solid 1px #000'}}>
                  
                <TechnicalAnalysis
                    symbol={'BTC1!'} 
                    height={200}
                    width={200}
                    interval={TechnicalAnalysis.THEMES.ONE_HOUR}
                    colorTheme ={TechnicalAnalysis.THEMES.LIGHT}
                    isTransparent={true}
                    showIntervalTabs={false}
                    />
                  
                  
                </td>
                <td style={{backgroundColor:'#6AA213',border:'solid 1px #000',height:'100px',width:'200px'}}>        
                  <div >
                    <FearAndGreed> </FearAndGreed>
                  </div>
                 </td>
              </tr>
              <tr>
                <td style={{backgroundColor:'#6AA213',border:'solid 1px #000'}}> 
                    <HashMeanRate></HashMeanRate>
                </td>
                <td style={{backgroundColor:'#EB6F74',border:'solid 1px #000'}}> 
                    <ActiveCount></ActiveCount>
                </td>
              </tr>
            
            <tr>
                <td style={{backgroundColor:'#EB6F74',border:'solid 1px #000'}}>
                  <DailyVolume></DailyVolume>
                </td>
                <td style={{backgroundColor:'#6AA213',border:'solid 1px #000'}}>
                  <StockRatio></StockRatio>
                </td>
              </tr>
            </table>
            </td>
          </tr>
        </table>
        
      );
    } else{
      return (
      
        <div>
            Loading..
        </div>
      );
    }
    
  }
}

export default First;
