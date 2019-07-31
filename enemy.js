function Enemy(name, hitpoints, strength, luck){
    this.name = name,
    this.hitpoints = hitpoints,
    this.strength = strength,
    this.luck = luck,
    this.enemyCrit = function(){
        let didCrit = Math.floor(Math.random()* 101);
        if (didCrit <= this.luck){
            strength = this.strength * 2;
        }
    }
}

module.exports = Enemy;