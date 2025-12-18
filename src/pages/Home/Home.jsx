import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

const{allcoin,currency}=useContext(CoinContext);

const [displayCoin,setDisplayCoin]=useState([]);

useEffect(()=>{
setDisplayCoin(allcoin);
},[allcoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace.
          Sign up to explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
  <div className="table-layout">
    <p>#</p>
    <p>Coins</p>
    <p>Price</p>
    <p>24H Change</p>
    <p className="market-cap">Market Cap</p>
  </div>
</div>
   <div>
    {
         displayCoin.slice(0,10).map((item, index)=>(
  <div className="table-layout" key={index}>
    <p>{item.market_cap_rank}</p>
    <div>
      <img src={item.image} alt="" />
      <p>{item.name + " - " + item.symbol}</p>
    </div>
    <p>
  {currency.symbol}{" "}
  {item.current_price.toLocaleString()}
</p>

    <p className={item.price_change_percentage_24h>0?"green":"red"}>{item.price_change_percentage_24h.toFixed(2)}%</p>

    <p>
  {currency.symbol}
  {(item.market_cap / 1e9).toFixed(2)}B
</p>

   </div>
   ))
}
    </div>
       </div>
  )
}

export default Home
