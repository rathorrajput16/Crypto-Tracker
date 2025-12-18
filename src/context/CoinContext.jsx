import { createContext, useEffect,useState } from "react";

export const CoinContext=createContext();
const CoinContextProvider=(props)=>{
    const[allcoin,setallcoin]=useState([]);
    const[currency,setCurrency]=useState({
        name:"usd",
        symbol:"$"
    })

    const fetchallcoin=async()=>{
                const options = {
                      method: "GET",
                     headers: {
                     "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
                     },
                    };

              fetch(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,

              options
                 )
             .then((res) => res.json())
             .then((data) => setallcoin(data))
             .catch((err) => console.error(err));

    }

    useEffect(()=>{
        fetchallcoin();
    },[currency])
    const contextValue={
      allcoin,currency,setCurrency
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;