const div= document.querySelector('#div');
let gridwidth = 500;
let cellnumber=50;
let cellcolor='rgb(0,0,0)';
function creategrid(cellnumber){
    div.setAttribute('style', `grid: repeat(${cellnumber}, auto) / repeat(${cellnumber}, auto)`);
    for (let i=0;i<(cellnumber*cellnumber);i++){
        const cell = document.createElement('div')
        cell.setAttribute('class','cell');
        cell.setAttribute('width',`${cellnumber}px`)
        cell.setAttribute('heigth',`${cellnumber}px`)
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('class','cell colorcell');
        })
        div.appendChild(cell);
    }
}
function createrainbowgrid(cellnumber){
    div.setAttribute('style', `grid: repeat(${cellnumber}, auto) / repeat(${cellnumber}, auto)`);
    for (let i=0;i<(cellnumber*cellnumber);i++){
        const cell = document.createElement('div')
        cell.setAttribute('class','cell');
        cell.setAttribute('width',`${cellnumber}px`)
        cell.setAttribute('heigth',`${cellnumber}px`)
        cell.addEventListener('mouseover', () => {
            let colorcell = randomcolor();
            cell.setAttribute('class', 'cell');
            cell.setAttribute('style','background-color: '+colorcell)
        })
        div.appendChild(cell);
    }
}

function blacktowhite(cellnumber){
    div.setAttribute('style', `grid: repeat(${cellnumber}, auto) / repeat(${cellnumber}, auto)`);
    for (let i=0;i<(cellnumber*cellnumber);i++){
        const cell = document.createElement('div')
        cell.setAttribute('class','cell');
        cell.setAttribute('width',`${cellnumber}px`)
        cell.setAttribute('heigth',`${cellnumber}px`)
        let a=0;
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('class', 'cell');
            cell.setAttribute('style',`background-color: rgba(0,0,0,${a += 0.1}`)
        })
        div.appendChild(cell);
    }
}

function randomcolor(){
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    return "rgb("+a+","+b+","+c+")";
}
const gridsize = document.querySelector("#gridsize");
gridsize.addEventListener('click', () => {
    cellnumber = prompt('Choose a number between 1 and 100 to make your grid.')
    if(cellnumber<1 || cellnumber>100){
        alert('Choose a valid number.')
    }else{
        let everycell =document.querySelectorAll(".cell")
        everycell.forEach((cell) =>{
            cell.parentNode.removeChild(cell);
        })     
        creategrid(cellnumber);
    }
})
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    let everycell =document.querySelectorAll(".cell")
    cellnumber = 50;
        everycell.forEach((cell) =>{
            cell.parentNode.removeChild(cell);
        })     
        creategrid(cellnumber);
})
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    cellnumber = prompt('Choose a number between 1 and 100 to make your grid.')
    if(cellnumber<1 || cellnumber>100){
        alert('Choose a valid number.')
    }else{
        let everycell =document.querySelectorAll(".cell")
        everycell.forEach((cell) =>{
            cell.parentNode.removeChild(cell);
        })     
        createrainbowgrid(cellnumber);
    }
})
const wtob = document.querySelector('#wtob');
wtob.addEventListener('click', () => {
    cellnumber = prompt('Choose a number between 1 and 100 to make your grid.')
    if(cellnumber<1 || cellnumber>100){
        alert('Choose a valid number.')
    }else{
        let everycell =document.querySelectorAll(".cell")
        everycell.forEach((cell) =>{
            cell.parentNode.removeChild(cell);
        })     
        blacktowhite(cellnumber);
    }
})
creategrid(cellnumber);
