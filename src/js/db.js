import img1 from "../../public/upgrade/01.png"
import img2 from "../../public/upgrade/02.png"
import img3 from "../../public/upgrade/03.png"
import img4 from "../../public/upgrade/04.png"
import img5 from "../../public/upgrade/05.png"
import img6 from "../../public/upgrade/06.png"

const actionEffect = (value, effect, level) => {
    return parseFloat(value) + (effect * level) 
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
        action: (value) => { return actionEffect(value, effect, level) }
    },
    {
        name: "Savage warrior",
        description: "+ 0.5 click automatique",
        image: img2,
        price: 50,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 0.5,
        action: (value) => { return actionEffect(value, effect, level) }
    },
    {
        name: "Lady of the night",
        description: "+ 3 click automatique",
        image: img3,
        price: 250,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 3,
        action: (value) => { return actionEffect(value, effect, level) }
    },
    {
        name: "Sniper",
        description: "+ 5 coins / click",
        image: img4,
        price: 500,
        level: 0,
        effect: "ADD",
        damage: 5,
        action: (value) => { return actionEffect(value, effect, level) }
    },
    {
        name: "Golden angel",
        description: "+ 10 click automatique",
        image: img5,
        price: 2000,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 10,
        action: (value) => { return actionEffect(value, effect, level) }
    },
    {
        name: "Dark Assassin",
        description: "+ 20 coins / click",
        image: img6,
        price: 10000,
        level: 0,
        effect: "ADD",
        damage: 20,
        action: (value) => { return actionEffect(value, effect, level) }
    }
]
