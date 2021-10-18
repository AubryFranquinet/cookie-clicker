import enemyImg from "../../public/enemy/goblin.png"
import enemyHurtImg from "../../public/enemy/goblin_hurt.png"
import { addCoin } from "./coin"

const enemy = document.querySelector(".character-enemy-img")
const characterEnemy = document.querySelector(".character-enemy")
let isHit = false

export const initEnemy = () => {
    enemy.addEventListener("click", () => {
        isHit = !isHit

        if (isHit) {
            changeImage()
            addCoin()
            createDamageDom()
        }
        else enemy.src = enemyImg
    })
}

const changeImage = () => {
    enemy.src = enemyHurtImg
    setTimeout(() => {
        enemy.src = enemyImg
    }, 100)
}

// right: 10%;
// bottom: 65%;

const createDamageDom = () => {
    const randomRight = Math.floor( Math.random() * 20 ) + 7
    const randomBottom = Math.floor( Math.random() * 15 ) + 45
    const newP = document.createElement("p")

    console.log(randomBottom, randomRight)

    newP.classList.add("character-damage")
    newP.innerHTML = "+ 1 coin"
    newP.style.right = `${randomRight}%`
    newP.style.bottom = `${randomBottom}%`

    characterEnemy.appendChild(newP)

    setTimeout(() => {
        characterEnemy.removeChild(newP)
    }, 500);
}