export let coin = 10000
const coinDom = document.querySelector(".coins-counter")

export const addCoin = (powerClick) => {
    coin += powerClick
    coinDom.innerHTML = coin
}

export const changeCoin = (value) => {
    coin = value
    coinDom.innerHTML = coin
}