class CardManager{
flipCard = new Set();
urLFactory;

constructor(factory){
    this.urLFactory = factory;
}


gen(HeroNumber){
    let template = document.getElementById("cardTemple");
    let clone = template.content.cloneNode(true);


    let image = clone.querySelector("img");

    image.setAttribute("src", this.urLFactory(HeroNumber));


clone.children[0].addEventListener('click',
    event => this.onClick(event)
);

    return clone;
}
unflip(cardNode){
cardNode.children[0].classList.remove('selected');
}

flip(cardNode){
    cardNode.children[0].classList.add('selected');
     this.flipCard.add(cardNode)

}

disable(cardNode){
    cardNode.children[0].classList.add('matched');
    this.unflip(cardNode)

}
check(){
    let urls = [...this.flipCard].map((carr)=>{
        return carr.querySelector("img").src;
    })
    return urls[0] == urls[1]
}

endTurn(){
    let cabeca = this.check()? (carr)=> this.disable(carr): this.unflip
    this.flipCard.forEach(cabeca);
    this.flipCard.clear()
}



onClick(event){
    if(this.flipCard.size == 2){
        this.endTurn();
    }
else{
     this.flip(event.target)
    }
}

}

