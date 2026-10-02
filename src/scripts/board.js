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
            console.error(`erro num tem coisa aq ${numberCards}`);
            numberCards = 2*this.numImgs;
        }

        this.clearMan();
        this.addCard(this.cardManager.gen(1));
    }


    addCard(card){
        this.node.appendChild(card);
    
    
    }




}