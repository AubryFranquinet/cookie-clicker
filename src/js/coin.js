const coinDom = document.querySelector(".coins-counter")

export let coin = 0

export const addCoin = () => {
    coin++
    coinDom.innerHTML = coin
}