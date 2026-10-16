let ,hero = {
hp: 100,
takeDamage: function (damage) {
  this.hp -= damage;
  console.log(this.hp);
},
};
let support = {
   hp: 200,
takeDamage: function (damage) {
  this.hp -= damage;
  console.log(this.hp);
},
   protect: function(char){
       char.takeDamage = function(damage){thisDamage(damage);}
   }
}
