import img1 from "../../public/upgrade/01.png"
import img2 from "../../public/upgrade/02.png"
import img3 from "../../public/upgrade/03.png"
import img4 from "../../public/upgrade/04.png"
import img5 from "../../public/upgrade/05.png"
import img6 from "../../public/upgrade/06.png"

/*
<article class="article"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSs1Eht_eBrz2bhChpe4N-gDnIsiFQdbZLOx4C6gHiZ3gPR-y4h8MbzKn6ggPsFM7D_98&usqp=CAU" alt=""></article>
<article class="article"> <img src="https://thumbs.dreamstime.com/t/power-punch-hand-illustration-art-background-77718584.jpg" alt=""></article>
<article class="article"><img src="https://images.megapixl.com/4893/48936764.jpg" alt=""> </article>
<article class="article"><img src="https://s3-eu-west-1.amazonaws.com/cdn.webfactore.co.uk/sr_430113_largeish.jpg" alt=""></article>
<article class="article"><img src="https://m.media-amazon.com/images/I/81l-whkD3CL._AC_SL1500_.jpg" alt=""></article>
<article class="article"><img src="https://www.picclickimg.com/d/l400/pict/114828946564_/Cute-Lion-Cartoon-Face-Head-Circle-Gift-Idea.jpg" alt=""></article>
*/

const actionEffect = (value, effect, level) => {
    console.log(effect, level)
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
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Savage warrior",
        description: "+ 0.5 click automatique",
        image: img2,
        price: 50,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 0.5,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Lady of the night",
        description: "+ 3 click automatique",
        image: img3,
        price: 250,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 3,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Sniper",
        description: "+ 5 coins / click",
        image: img4,
        price: 500,
        level: 0,
        effect: "ADD",
        damage: 5,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Golden angel",
        description: "+ 10 click automatique",
        image: img5,
        price: 2000,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 10,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    },
    {
        name: "Dark Assassin",
        description: "+ 20 coins / click",
        image: img6,
        price: 10000,
        level: 0,
        effect: "ADD",
        damage: 20,
        action: (value) => { return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level) }
    }
]
