function urLBuilder(number){

    number+="";
    number = number.padStart(2,'0')

    return `images/heros/card${number}.jpeg`
}

let card = new CardManager(urLBuilder);
let board = new boardManager("board", 50, card);

let menu = document.getElementById("menu")
let start = document.getElementById("start")
let select =  document.getElementById("numCards")

for (let i = 4; i<= 10; i+=2){
    let n = i*i; 
    let op = document.createElement("option")

    op.valeue = n
    op.innerHTML = n

    select.appendChild(op)
}

start.addEventListener('click', ()=>{
    menu.classList.add('hidden')
    board.node.classList.remove('hidden')
    
    board.fill(select.value);
})

board.node.addEventListener("click", ()=>{
if(board.check()){
    setTimeout(()=>{
        menu.classList.remove("hidden")
            board.node.classList.add('hidden')
    }, 2000)
   } 
})



   