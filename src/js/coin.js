export let coin = 10000
const coinDom = document.querySelector(".coins-counter")

export const addCoin = (powerClick) => {
    coin += powerClick
    coinDom.innerHTML = coin
    addToLocalStorage(coin)
}

export const changeCoin = (value) => {
    coin = value
    coinDom.innerHTML = coin
}


// add coins to localStorage
document.addEventListener('DOMContentLoaded', function(e){
    let tasks 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',')
    }

    for(let item of tasks){
        coinDom.innerHTML = item;
    }
    
})

 function addToLocalStorage(task){
    let tasks 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',')
    }
    tasks.push(task)
    
    localStorage.setItem('tasks', tasks)
}