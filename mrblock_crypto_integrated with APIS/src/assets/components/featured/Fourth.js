import React from 'react';
import Stargate from '../../img/carousel/stargate.jpg';
import TotalMarketValueGraph from '../TotalMarketValueGraph';
import ProfitRelative from '../ProfitRelative';
import ETHHashRateDificulty from '../ETHHashRateDificulty';
import TopSocialGainerLosers from '../TopSocialGainerLosers';

class Fourth extends React.Component{
    render() {
        const stargate = {
            background: `url(${Stargate})`
        };
        return(
           <table style={{height:'100%',width:'100%'}}>
               <tr>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000'}} 
                    width={'33%'} height={'33%'}> 
                    <TopSocialGainerLosers></TopSocialGainerLosers>
                    </td>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000',color:'#000'}}
                    width={'33%'} height={'33%'} >Miner Balance API access needs to be purchased</td>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000'}}
                    width={'33%'} height={'33%'} ><TotalMarketValueGraph></TotalMarketValueGraph></td>
               </tr>
               <tr>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000'}} width={'33%'} height={'33%'}>
                       <ProfitRelative></ProfitRelative>
                   </td>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000',color:'#000'}} width={'33%'} height={'33%'}>Gas Used ETH API access needs to be purchased</td>
                   <td style={{backgroundColor:'#fff',border:'solid 1px #000'}} width={'33%'} height={'33%'}><ETHHashRateDificulty></ETHHashRateDificulty></td>
               </tr>
           </table>
        )
    }
}

export default Fourth;