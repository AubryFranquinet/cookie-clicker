import { db_upgrade } from "./db";


export function Basket(){ 
const charBasket = document.getElementById('char-basket')

for(let element of db_upgrade){
    // div for every charcter to buy
    const character = document.createElement('div');
    character.className ="character";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::
    // div for the price 
    const pricesDiv = document.createElement('div')
    pricesDiv.className="prices"
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
    

}
}



/*
        <div class="char-power">
            <article class="article"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSs1Eht_eBrz2bhChpe4N-gDnIsiFQdbZLOx4C6gHiZ3gPR-y4h8MbzKn6ggPsFM7D_98&usqp=CAU" alt=""></article>
            <article class="article"> <img src="https://thumbs.dreamstime.com/t/power-punch-hand-illustration-art-background-77718584.jpg" alt=""></article>
            <article class="article"><img src="https://images.megapixl.com/4893/48936764.jpg" alt=""> </article>
            <article class="article"><img src="https://s3-eu-west-1.amazonaws.com/cdn.webfactore.co.uk/sr_430113_largeish.jpg" alt=""></article>
            <article class="article"><img src="https://m.media-amazon.com/images/I/81l-whkD3CL._AC_SL1500_.jpg" alt=""></article>
            <article class="article"><img src="https://www.picclickimg.com/d/l400/pict/114828946564_/Cute-Lion-Cartoon-Face-Head-Circle-Gift-Idea.jpg" alt=""></article>
            
        </div>
    </div>
    */