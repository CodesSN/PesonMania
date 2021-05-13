import axios from 'axios';
class Coins{
    constructor(money,coin) {
    this.money = money;
    this.coin = (coin)? coin : 1;
  }
  
  setCoin(coin){
  }

  getCoin(){
      return this.coin;
  }

  setMoney(amount){
    save(amount)
  }

  getMoney(id_user){
    getMoney(id_user)
  }

  buy(price){
    this.money = this.money - price;
  }
}

async function getMoney(id_user) {
  await axios.post('localhost:3001/coins/',id_user)
  .then(response => { console.log(response) })
  .catch(err => { console.log(err)})
}

async function save(amount) {
  await axios.post('localhost:3001/coins/save',amount)
  .then(response => { console.log(response) })
  .catch(err => { console.log(err)})
}
export default Coins;