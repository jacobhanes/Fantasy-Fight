function Enemy(name, hitpoints, maxHitPoints, strength, luck){
    this.name = name,
    this.hitpoints = hitpoints,
    this.maxHitPoints = maxHitPoints,
    this.strength = strength,
    this.luck = luck,
    this.enemyInfo = function(){
        let enemydeets = [
            "Name: " + this.name,
            "HP: " + this.hitpoints,
            "Max HP: " + this.maxHitPoints,
            "Strength: " + this.strength,
            "Luck: " + this.luck,
        ].join("\n");
        console.log(enemydeets);
    }
    this.enemyCrit = function(){
        let didCrit = Math.floor(Math.random()* 101);
        if (didCrit <= this.luck){
            strength = this.strength * 2;
        }
    }
}

module.exports = Enemy;