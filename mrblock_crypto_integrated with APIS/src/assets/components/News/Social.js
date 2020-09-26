import React from 'react';
import '../../css/custom.css'

 class Social extends React.Component{
    render() {
        return(
            <div>
                <h2 className = "h2-social">
                    <span className="social-news"> Latest Social News </span>
                </h2>
                <iframe src="https://lunarcrush-widgets.firebaseapp.com/social?key=&symbol=BTC&interval=1 Week&animation=false&theme=dark" id="social-feed" frameBorder="2" border="solid" cellSpacing="0" scrolling="yes" className = "social-iframe" />


                <coingecko-beam-widget type="all" height="300" locale="en" vce-ready="" />
            </div>

        )
    }
}
export default Social;
