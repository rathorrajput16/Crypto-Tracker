import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart';

const Coin = () => {

  const { coinId } = useParams();
  const [coinData,setCoinData]=useState();
  const [historicalData,sethistoricalData]=useState();
  const {currency}=useContext(CoinContext);
  const fetchCoinData=async()=>{
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(res => res.json())
  .then(res => setCoinData(res))
  .catch(err => console.error(err));
  }
 const fetchHistoricalData=async()=>{
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=5`, options)
  .then(res => res.json())
  .then(res => sethistoricalData(res))
  .catch(err => console.error(err));
 }


  useEffect(()=>{
    setCoinData(null);
  sethistoricalData(null);
    fetchCoinData();
    fetchHistoricalData();
  },[currency,coinId])


 if (coinData&&historicalData) {
  return (
    <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image.large} alt="" />
        <p>
          <b>
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </b>
        </p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData}/>
      </div>
       <div className="coin-info">
        <ul>
  <li>Crypto Market Rank</li>
  <li>{coinData.market_cap_rank}</li>
</ul>

<ul>
  <li>Current Price</li>
  <li>
    {currency.symbol}{" "}
    {coinData.market_data.current_price[currency.name].toLocaleString()}
  </li>
</ul>

<ul>
  <li>Market cap</li>
  <li>
    {currency.symbol}{" "}
    {coinData.market_data.market_cap[currency.name].toLocaleString()}
  </li>
</ul>

        </div>



    </div>
  )
}
else{
    return (
    <div className='spinner'>
      <div className="spin"></div>
    </div>)
}
}

export default Coin
