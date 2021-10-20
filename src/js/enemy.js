import { addCoin } from "./coin"
import { addClick, death } from "./clickCounter"
import enemyImg from "../../public/enemy/goblin.png"
import enemyHurtImg from "../../public/enemy/goblin_hurt.png"


import newImg1 from "../../public/upgrade/01.png"
import newImg2 from "../../public/upgrade/02.png"
import newImg3 from "../../public/upgrade/03.png"
import newImg4 from "../../public/upgrade/04.png"
import death from "../assets/enemy/DEAD2.png"

//USEFULL VARIABLES //
const enemy = document.querySelector(".character-enemy-img")
const characterEnemy = document.querySelector(".character-enemy")


export let powerClick = 1

export const changePowerClick = (value) => {
    powerClick = value
}


/////////////// WORK IN PROGRESS ////////////////
//ENNEMY HEALTHBAR//
const ennemies = [newImg1, newImg2, newImg3, newImg4];
const skullDom = document.querySelector(".ennemiesCounter")
let item = ennemies[Math.floor(Math.random() * ennemies.length)];
let isDead = 0

const decrHealth = () => {

    
    let healthBar = document.getElementById("hp")
    healthBar.value -= 10;

    if (healthBar.value === 0) {

        healthBar.value = 100;
        isDead++
        skullDom.innerHTML = isDead
        enemy.src = death
        console.log(isDead)
    }


}

export const initEnemy = () => {
    enemy.addEventListener("click", () => {
        changeImage()
        addCoin(powerClick)
        createDamageDom()
        addClick()
        decrHealth()

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
    const randomRight = Math.floor(Math.random() * 20) + 7
    const randomBottom = Math.floor(Math.random() * 15) + 45
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


