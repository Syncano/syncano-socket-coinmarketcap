import axios from 'axios';
import qs from 'querystring';

const coinMarketCapActions = async (endpoint, ctxArgs, wantedArgs, unwantedArgs) => {
  const COINMARKETCAP_API_URI = `https://api.coinmarketcap.com/v1/${endpoint}/`;
  const toBeUsed = {};
  Object.keys(wantedArgs).forEach((key) => {
    if (ctxArgs[key]) {
      toBeUsed[key] = ctxArgs[key];
    }
  });
  const queryParams = qs.stringify(toBeUsed);

  try {
    if (Object.keys(unwantedArgs).length < 1) {
      return await axios.get(`${COINMARKETCAP_API_URI}?${queryParams}`);
    }
    return ({
      argError: `You can only use the value(s) listed in ${endpoint} method. Check https://coinmarketcap.com/api/ for more information.`
    });
  } catch ({ response }) {
    return response;
  }
};

export default coinMarketCapActions;
