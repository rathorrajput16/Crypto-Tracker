import { createContext } from "react";
import { useState } from "react";
export const CoinContext=createContext();
const CoinContextProvider=(props)=>{
    const[allcoin,setallcoin]=useState([]);
    const[currrency,setCurrency]=useState({
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
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&price_change_percentage=1h",
              options
                 )
             .then((res) => res.json())
             .then((data) => console.log(data))
             .catch((err) => console.error(err));

    }
    const contextValue={
    
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;