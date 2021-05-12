import Coins from '../class/coin'
let coin = new Coins();
let items = ['Dos Manos','Aceite','Dedos rapidos','Pellizco suave','Dedos Termicos','Dedos Rapidos','Masaje','Manos Santas','Tres Manos']
let prices = [100,150,700,800,1200,36700,52000,1000000,1000000]

function buy(x) {
    let money  = coin.getMoney();
    console.log(coin.getMoney())
    let newmoney = money - prices[x]
    console.log(newmoney)
    if(money == prices[x]){
        console.log("nice")
        coin.setMoney(newmoney);
    }
}
function compare() {
    
}

var shop = () => {
    return(
        <div className="shop-div" id="1" >
            <div className="div-item">
                <div className="but">
                    <h3>Dos Manos</h3>
                    <h3>{prices[0]}$</h3>
                    <button title="buy" className="up" onClick={
                        () => {
                            console.log("s")
                            console.log(coin.getMoney())
                            buy(0);
                        }
                    }>Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="2">
                <div className="but">
                    <h3>Aceite</h3>
                    <h3>150$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="3">
                <div className="but">
                    <h3>Dedos rapidos</h3>
                    <h3>700$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="4">
                <div className="but">
                    <h3>Pellizco suave</h3>
                    <h3>800$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="5">
                <div className="but">
                    <h3>Dedos Termicos</h3>
                    <h3>1200$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="6">
                <div className="but">
                    <h3>Dedos Rapidos</h3>
                    <h3>36700$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="7">
                <div className="but">
                    <h3>Masaje</h3>
                    <h3>52000$</h3>
                    <button className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className= "div-item" id="8">
                <div className="but">
                    <h3>Manos Santas</h3>
                    <h3>1000000$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
            <div className="div-item" id="9">
                <div className="but">
                    <h3>Tres Manos</h3>
                    <h3>1000000$</h3>
                    <button title="buy" className="up">Comprar</button>
                <button className="up">Level Up</button>
                </div>
            </div>
        </div>
    )
}
export default shop;