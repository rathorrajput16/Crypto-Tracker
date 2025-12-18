import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link} from 'react-router-dom'
const Home = () => {

const{allcoin,currency}=useContext(CoinContext);

const [displayCoin,setDisplayCoin]=useState([]);

const[input,setInput]=useState('');
const inputHandler=(event)=>{
    setInput(event.target.value);
    
}
const searchHandler=async(event)=>{
event.preventDefault();

}
useEffect(() => {
  if (input === "") {
    setDisplayCoin(allcoin);
  } else {
    const coins = allcoin.filter(
      (item) =>
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.symbol.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  }
}, [input, allcoin]);


  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace.
          Sign up to explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list="coinlist" value={input} type="text" placeholder="Search crypto.."  />
          <datalist id="coinlist">
        {allcoin.map((item, index)=>(
        <option key={index} value={item.name}/>
          ))}
        </datalist>

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
         displayCoin.slice(0, input ? displayCoin.length : 10).map((item, index)=>(
  <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
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

   </Link>
   ))
}
    </div>
       </div>
  )
}

export default Home
