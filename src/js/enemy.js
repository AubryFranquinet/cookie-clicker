import { addCoin } from "./coin"
import { addClick } from "./clickCounter"
import enemyImg from "../../public/enemy/goblin.png"
import enemyHurtImg from "../../public/enemy/goblin_hurt.png"

const enemy = document.querySelector(".character-enemy-img")
const characterEnemy = document.querySelector(".character-enemy")

export let powerClick = 1

export const changePowerClick = (value) => {
    powerClick = value
}

export const initEnemy = () => {
    enemy.addEventListener("click", () => {
        changeImage()
        addCoin(powerClick)
        handleClickEnemy()
        addClick()
    })
}

export const handleClickEnemy = (params) => {
    createDamageDom(params)
}

const changeImage = () => {
    enemy.src = enemyHurtImg
    setTimeout(() => {
        enemy.src = enemyImg
    }, 100)
}

const createDamageDom = (params) => {
    const randomRight = Math.floor( Math.random() * 20 ) + 7
    const randomBottom = Math.floor( Math.random() * 15 ) + 45
    const newP = document.createElement("p")

    newP.classList.add("character-damage")
    
    if (params === undefined) newP.innerHTML = `+ ${powerClick} coin`
    else newP.innerHTML = `+ ${params} coin`

    newP.style.right = `${randomRight}%`
    newP.style.bottom = `${randomBottom}%`

    characterEnemy.appendChild(newP)

    setTimeout(() => {
        characterEnemy.removeChild(newP)
    }, 500);
}