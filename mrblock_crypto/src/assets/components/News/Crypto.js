import React from 'react';
import '../../css/custom.css'

 class Crypto extends React.Component{
    render() {
        return(
            <div>
                <h2 className = "h2-social">
                    <span className="chicken"> Latest Crypto News</span>
                </h2>
                <iframe src="https://lunarcrush-widgets.firebaseapp.com/news?key=&amp;symbol=BTC&amp;interval=1 Week&amp;animation=false&amp;theme=light" id="news-articles" frameBorder="2" border="solid" cellSpacing="0" scrolling="yes" className = "crypto-iframe" />
                            
            </div>

        )
    }
}
export default Crypto;
