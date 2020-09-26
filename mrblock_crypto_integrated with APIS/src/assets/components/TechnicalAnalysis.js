import React, { useState, useEffect } from "react";

import TechnicalAnalysis from 'react-tradingview-technical-analysis';

export default ({}) => {
    return (
        <TechnicalAnalysis
            symbol={'BTC1!'} 
            interval={TechnicalAnalysis.THEMES.ONE_HOUR}
            autoSize={true}
            isTransparent={true}
        />
      );
};




