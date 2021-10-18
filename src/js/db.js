import img1 from "../../public/upgrade/01.png"
import img2 from "../../public/upgrade/02.png"
import img3 from "../../public/upgrade/03.png"
import img4 from "../../public/upgrade/04.png"
import img5 from "../../public/upgrade/05.png"
import img6 from "../../public/upgrade/06.png"
import { handleClickEnemy } from "./enemy"
import { coin, changeCoin } from "./coin"

const actionEffect = (value, effect, level) => {
    if (value === undefined) return effect * level
    else return parseFloat(value) + (effect * level) 
}

const attackAuto = (value, index) => setTimeout(() => {
    changeCoin(coin + value)
    handleClickEnemy(value)
    db_upgrade[index].actionAttack()
    console.log(value, index)
}, 1000);

export const changeDb = (newDb) => {
    db_upgrade = newDb
}

export let db_upgrade = [
    {
        name: "Knight of night",
        description: "+ 0.5 coin / click",
        image: img1,
        price: 10,
        level: 0,
        effect: "ADD",
        damage: 0.5,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Savage warrior",
        description: "+ 0.5 click / second",
        image: img2,
        price: 50,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 0.5,
        action: (value) => { return actionEffect(value, db_upgrade[1].damage, db_upgrade[1].level) },
        actionAttack: () => attackAuto(db_upgrade[1].action(), 1)
    },
    {
        name: "Lady of the night",
        description: "+ 3 click / second",
        image: img3,
        price: 250,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 3,
        action: (value) => { return actionEffect(value, db_upgrade[2].damage, db_upgrade[2].level) },
        actionAttack: () => attackAuto(db_upgrade[2].action(), 2)
    },
    {
        name: "Sniper",
        description: "+ 5 coins / click",
        image: img4,
        price: 500,
        level: 0,
        effect: "ADD",
        damage: 5,
        action: (value) => { return actionEffect(value, db_upgrade[3].damage, db_upgrade[3].level) }
    },
    {
        name: "Golden angel",
        description: "+ 10 click / second",
        image: img5,
        price: 2000,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 10,
        action: (value) => { return actionEffect(value, db_upgrade[4].damage, db_upgrade[4].level) },
        actionAttack: () => attackAuto(db_upgrade[4].action(), 4)
    },
    {
        name: "Dark Assassin",
        description: "+ 20 coins / click",
        image: img6,
        price: 10000,
        level: 0,
        effect: "ADD",
        damage: 20,
        action: (value) => { return actionEffect(value, db_upgrade[5].damage, db_upgrade[5].level) }
    }
]
