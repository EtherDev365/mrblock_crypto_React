import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


import First from './featured/First';
import Second from './featured/Second';
import Third from './featured/Third';
import Fourth from './featured/Fourth';
import DemoStepbrothers from './featured/DemoStepbrothers';

import '../css/custom.css'
import HorizontalCrypto from './HorizontalCrypto';
import TickerWidgetByAPI from './TickerWidgetByAPI';

class MovieCarousel extends React.Component{
    render() {
        return(
            

            /* Top coinlib */
                <div>
                    <div>
                        <em href="#" className="fa fa-facebook"></em>
                        <em href="#" className="fa fa-twitter"></em>
                        <em href="#" className="fa fa-google"></em>
                        <em href="#" className="fa fa-linkedin"></em>
                        <em href="#" className="fa fa-youtube"></em>
                        <em href="#" className="fa fa-instagram"></em>
                    </div>
                    
                    <div  className = "preheader-style" >

{/*                         <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=yes" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className = "crapto-none-move" />
 */}                    
 
                       <HorizontalCrypto></HorizontalCrypto>
                    </div>


                    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={5000} transitionTime={700}>
                        
                        <First />
                        
                        <Second />

                        <Third />

                        <Fourth />

                        <DemoStepbrothers />

                    </Carousel>


                    {/* <div className="tradingview-widget-container custom-tranding">
                        <iframe scrolling="no" allowtransparency="true" frameBorder="0" src="https://s.tradingview.com/embed-widget/tickers/?#%7B%22isTransparent%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A104%2C%22utm_source%22%3A%22%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22tickers%22%7D" className = "tranding-iframe crapto-none-move"></iframe>
                   </div> */}
                   <TickerWidgetByAPI></TickerWidgetByAPI>
                    <h1 className = "center"> Breaking News, Prices, and Sentiment </h1>
                </div>
        )
    }
}

export default MovieCarousel;