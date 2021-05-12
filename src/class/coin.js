
class Coins{
    constructor(money,coin) {
    this.money = money;
    this.coin = (coin)? coin : 1;
  }
  
  setCoin(coin){
    this.coin = (coin) ? coin : 1;
  }

  getCoin(){
      return this.coin;
  }

  setMoney(money){
    this.money = (money)? money:0;
  }

  getMoney(){
      return (this.money > 0)? this.money:0;
  }

  buy(price){
    this.money = this.money - price;
  }
}
export default Coins;