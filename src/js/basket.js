import { db_upgrade } from "./db";
import { upgradeBuy } from "./upgrade"
const shopBasket = document.getElementById('basket')
const shopping = document.getElementById('shopping')

export function Basket(){ 
    const charBasket = document.getElementById('char-basket')
    
    db_upgrade.forEach((element, index) => {
        // div for every charcter to buy
        const character = document.createElement('div');
        character.className ="character";

        // :::::::::::::::::::::::::::::::::::::::::::::::::::::
        // div for the price 
        const pricesDiv = document.createElement('div')
        pricesDiv.className="prices"
        pricesDiv.addEventListener("click", () => upgradeBuy(element, index))
        const levelUp = document.createElement('p')
        levelUp.innerText = "LVL UP"
        levelUp.innerText = "LVL " + element.level ;

        const prix = document.createElement('p')
        prix.innerText = element.price + " coins";
        // add price and leve in the price div
        pricesDiv.append(levelUp)   
        pricesDiv.append(prix)
        character.appendChild(pricesDiv)

        // ::::::::::::::::::::::::::::::::::::::::::::::::

        // div for character description
        const description = document.createElement('div')
        description.className ="powers";
        const charInfo = document.createElement('div');
        charInfo.classList.add("charInfo")

        const charName = document.createElement('p');
        charName.innerText = element.name;
        charInfo.append(charName)

        const descrip = document.createElement('p')
        descrip.innerText = element.description
        charInfo.append(descrip);
        description.append(charInfo);
        //:::::::::::::::::::::::::::::::::::::::::::::::::
        const charImg = document.createElement('img');
        charImg.className ="images"
        charImg.className ="warrior"
        charImg.setAttribute('src', element.image)

        character.append(charInfo)
        
        character.append(charImg)
        charBasket.append(character)
    }) 
}

export function showBasket(){
    shopping.addEventListener('click',()=>{
        shopBasket.classList.toggle('show')
    })
}
