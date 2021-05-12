    import out from './render'
    import Coins from '../class/coin'
    import useSound from 'use-sound';
    import grab1 from 'C:/Users/rice1/Desktop/pesonmania/src/assets/YAMETE KUDASAI.mp3'

  //let frases = ["ahh oni-chan","oh yes","asi","baka","mas fuerte","Yamete kudazai","quierooo una maruchan!!!!","oh si alfred","el armando es puto"]
  let y = 0;
  var p1 = document.getElementById('peson1');
  let randomix
  let grabacion = "src/assets/Grabación.mp3"
  let coin = new Coins();

  function exyen(){
    let x = coin.getCoin();
    let money = coin.getMoney();
        x = x + money;
    coin.setMoney(x);
    console.log(coin.getMoney())
    document.getElementById("coins-stats").innerText = coin.getMoney();
  }
  let muni = coin.getMoney()
  function pellizco(){
    document.getElementById("loser-message").innerText = 'no pellizques';
    console.log(coin.getMoney())
  }

  const BoopButton = () => {
    const [play] = useSound(grab1);
    return <button tittle="peson" className="peson1" id ="peson1" onMouseEnter={ () => {
      play();
      exyen();
  }} onClick={ () => {
    pellizco();
  }}>
  </button>;
  };

var coins = () => {
    console.log("hola");
        return(
            
            <div className="peson">
           {BoopButton()}
            </div>
        );
}
console.log('App started')
export default coins;