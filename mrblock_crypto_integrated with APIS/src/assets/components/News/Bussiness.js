import React from 'react';
import '../../css/custom.css'

 class Bussiness extends React.Component{
    render() {
        return(
            <div>
                <h2 className = "h4-bussiness">
                    <span className="business">  Business News  </span>
                </h2>
                    <div id="widget-news"></div>
                   
                <div class="sc-ckVGcZ gzFkWf">News
                    <iframe src="https://lunarcrush-widgets.firebaseapp.com/news?key=&amp;symbol=BTC&amp;interval=1 Week&amp;animation=false&amp;theme=light" id="news-articles" frameborder="2" border="solid" cellspacing="0" scrolling="yes" className = "crypto-iframe" />
                
                </div>
                            
            </div>

        )
    }
}
export default Bussiness;