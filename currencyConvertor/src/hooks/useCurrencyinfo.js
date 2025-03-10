import { useEffect } from "react";
import { useState } from "react";
function useCurrencyinfo(currency) {
  const [data, setData] = useState({});
  const URL = `https://api.currencyapi.com/v3/latest`;
  const API_KEY = `cur_live_czNytfX5I4DKHbayxZ0mDp2mSgNADazZCSOFUwB1`;
  useEffect(() => {
    async function fetchCurrency() {
      const res = await fetch(`${URL}?apikey=${API_KEY}&base_currency=${currency}`);
      const data = await res.json();
      setData(data.data);
    }
    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyinfo;
