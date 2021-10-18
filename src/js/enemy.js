import enemyImg from "../../public/enemy/goblin.png"
import enemyHurtImg from "../../public/enemy/goblin_hurt.png"
import { addCoin } from "./coin"
import { addClick } from "./clickCounter"

const enemy = document.querySelector(".character-enemy-img")
const characterEnemy = document.querySelector(".character-enemy")


export const initEnemy = () => {
    enemy.addEventListener("click", () => {

       
            changeImage()
            addCoin()
            createDamageDom()
            addClick()
        
        
    })
}

const changeImage = () => {
    enemy.src = enemyHurtImg
    setTimeout(() => {
        enemy.src = enemyImg
    }, 100)
}

const createDamageDom = () => {
    const randomRight = Math.floor( Math.random() * 20 ) + 7
    const randomBottom = Math.floor( Math.random() * 15 ) + 45
    const newP = document.createElement("p")

    newP.classList.add("character-damage")
    newP.innerHTML = "+ 1 coin"
    newP.style.right = `${randomRight}%`
    newP.style.bottom = `${randomBottom}%`

    characterEnemy.appendChild(newP)

    setTimeout(() => {
        characterEnemy.removeChild(newP)
    }, 500);
}