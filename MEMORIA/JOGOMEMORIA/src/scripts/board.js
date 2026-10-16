class boardManager{
    cardManager;
    node;
    numImgs;
    curNumCrads;

    constructor(id, numImgs, cardManager){
        this.node = document.getElementById(id);

        this.numImgs = numImgs;
        this.cardManager = cardManager;
    
    }
    clearMan(){
        this.node.innerHTML = "";
    }

    fill(numberCards){

        if(numberCards>2 * this.numImgs){
            console.error(`erro num tem coisa aq ${numberCards}carr.`);
            numberCards = 2*this.numImgs;
        }
        numberCards=parseInt(numberCards);

        this.curNumCards=numberCards;

        this.clearMan();
        this.genRamdonList(numberCards).forEach((Number)=>{
 console.log("007")
        this.addCard(this.cardManager.gen(Number));
        }) 
       
        this.adjustCss();
    }

    adjustCss(){
        let cols = Math.sqrt(this.curNumCrads);
        let size = (100/cols-1);
        size+='vmin';

        document.documentElement.style.setProperty("--numCols", cols);
        document.documentElement.style.setProperty("--size", size);

    }

    addCard(card){
        this.node.appendChild(card);
    
    
    }


genRamdonList(size){

let list = Array(size/2).fill().map((_,i)=>i+1);

list = [...list,...list].sort(()=>Math.random()-0.5);
return list;


}

check(){
    let flip = document.getElementsByClassName("matched")

    return flip.length >= this.curNumCards;
}

}