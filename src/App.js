import coins from './functions/coins'
import Coins from './class/coin'
import './App.css';
import logo from "./logo"
import stats from "./functions/stats"
import shop from "../src/functions/shop"
import axios from 'axios'

const baseurl = 'http://localhost:3001/'

let coin = new Coins();


function App() {
  console.log(coin.getMoney);
  
  async function pruebis(){
      await axios.get(baseurl)
      .then(response => { console.log(response) })
      .catch(err => { console.log(err)})
  }

  pruebis();

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
