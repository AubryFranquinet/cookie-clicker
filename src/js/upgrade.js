import { coin, changeCoin } from "./coin"
import { db_upgrade, changeDb } from "./db"
import { handleClickEnemy } from "./enemy"
import { powerClick, changePowerClick } from "./enemy"

const coinDom = document.querySelector(".coins-counter")
const charBasket = document.getElementById('char-basket')

export const upgradeBuy = (data, index) => {
    if (coin >= data.price)  handleUpgrade(data, index)
    else {
        coinDom.style.color = "crimson";
        coinDom.style.transform = "scale(1.5) translateX(5px)"

        setTimeout(() => {
            coinDom.style.color = "#fff";
            coinDom.style.transform = "scale(1)"
        }, 400);
    }
}

const handleUpgrade = (data, index) => {
    const newCoin = coin - data.price
    let newDb = db_upgrade

    newDb[index] = {
        ...newDb[index],
        level: newDb[index].level += 1
    }
    
    charBasket.childNodes[index].childNodes[0].childNodes[0].innerHTML = `LVL ${newDb[index].level}`
    changeCoin(newCoin)
    changeDb(newDb)

    if (data.effect === "ADD") {
        changePowerClick(data.action(powerClick))
    } else if (data.effect === "AUTOMATIQUE") {
        console.log(db_upgrade[index].level)
        if (db_upgrade[index].level - 1 === 0) data.actionAttack()
    }
}

// const attackAuto = (index) => setInterval(() => {
//     const value = db_upgrade[index].action(db_upgrade[index].damage)
//     handleClickEnemy(value)
//     changeCoin(coin + value)
//     console.log("auto")
// }, 1000);