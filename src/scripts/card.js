class CardManager{
flipCard = new Set();
urLFactory;

constructor(factory){
    this.urLFactory = factory;
}


gen(HeroNumber){
    let template = document.getElementById("cardTemple");
    let clone = template.content.cloneNode(true);

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

onClick(event){
    this.flip(event.target);
}

}

