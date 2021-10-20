import { addToLocalStorage } from "./coin"
const clickDom = document.querySelector(".clickNumber")

export let clicks = 0

export const addClick = () => {
    clicks++
    clickDom.innerHTML = clicks
    addToLocalStorage(clicks)
}



document.addEventListener('DOMContentLoaded', function(e){
    let tasks 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',')

        for(let item of tasks){
          clickDom.innerHTML = item;
          clicks = parseFloat(item)
          
        }
    }

    
})