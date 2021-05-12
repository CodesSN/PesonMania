import coins from './functions/coins'
import Coins from './class/coin'
import './App.css';
import logo from "./logo"
import stats from "./functions/stats"
import shop from "../src/functions/shop"

let coin = new Coins();

function App() {
  console.log(coin.getMoney);
  return (
    <div className="App" onClick={()=> { console.log(coin.getMoney());}}>
      {logo()}
  {shop()}
  <div className="stats">
   {stats()}
 </div>
 <div className="pesons">
    {coins()}
 </div>
 
    </div>
  );
}

export default App;
