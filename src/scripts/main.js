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
   