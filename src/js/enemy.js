import { addCoin } from "./coin"
import { addClick } from "./clickCounter"
import enemyImg from "../../public/enemy/goblin.png"
import enemyHurtImg from "../../public/enemy/goblin_hurt.png"


import newImg1 from "../../public/upgrade/01.png"
import newImg2 from "../../publ3395224988.5
cursor

1015

SHOP

ic/upgrade/02.png"
import newImg3 from "../../public/upgrade/03.png"
import newImg4 from "../../public/upgrade/04.png"

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
let item = ennemies[Math.floor(Math.random() * ennemies.length)];

const decrHealth = () => {

    let isDead = false
    let healthBar = document.getElementById("hp")
    healthBar.value -= 10;

    if (healthBar.value === 0) {
        console.log("He's dead")
        isDead = true
    }

    if (isDead === true) {
        enemy.src = item
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


