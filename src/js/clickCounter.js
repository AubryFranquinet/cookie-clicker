
const clickDom = document.querySelector(".clickNumber")

export let clicks = 0

export const addClick = () => {
    clicks++
    clickDom.innerHTML = clicks
}