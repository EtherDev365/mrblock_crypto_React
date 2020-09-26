import React, { useState, useEffect } from "react";
import Twit from "twit";

export default ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    var T = new Twit({
      consumer_key: "0RrsQsUTveEUQRd2wFbjmFEgB",
      consumer_secret: "EB7NwIVADT2NzYLUjOp5v6CX2SPdNYpDVbWriOcGSQhVROysvi",
      access_token: "2744091598-0jWw5HVrCGJdeo8pGD9Tmzgjl9cuHYPECaxMsLM",
      access_token_secret: "wJNd9wC4vGcyWWWGWLerDg0Bl9h1I5sU1LYaWFXsbngqs",
      timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
      strictSSL: true, // optional - requires SSL certificates to be valid.
    });
    T.get(
      "search/tweets",
      {
        q:
          "cryptocurrency bitcoin btc eth xrp altcoins altcoin blockchain since:2011-07-11",
        count: 100,
      },
      function (err, data, response) {
        console.log(data);
      }
    );
  }, [items, setItems]);
  return <div></div>;
};
