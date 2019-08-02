function Hero(name, job, hitpoints, maxHitPoints, strength, luck, level) {
    this.name = name,
    this.job = job,
    this.hitpoints = hitpoints,
    this.maxHitPoints = maxHitPoints,
    this.strength = strength,
    this.luck = luck,
    this.level = level,
    this.printInfo = function () {
        let heroInfo = [
            "Name: " + this.name,
            "Job: " + this.job,
            "HP: " + this.hitpoints,
            "Max HP: " + this.maxHitPoints,
            "Strength: " + this.strength,
            "Luck(crit): " + this.luck,
            "Level: " + this.level
        ].join("\n");
        console.log(heroInfo);
    },
    this.heroCrit = function () {
        let didCrit = Math.floor(Math.random() * 101);
        if (didCrit <= this.luck) {
            strength = this.strength * 2;
        }
    };
    this.chooseHp = function(){
        this.hitpoints += 30;
        this.maxHitPoints += 30;
    };
    this.chooseStr = function(){
        this.strength += 3;
    };
    this.chooseLuck = function(){
        this.luck += 3;
    };
    this.isAlive = function(){
        if (this.hitpoints > 0){
            console.log("hero is alive");
        }
        else {
            console.log("Hero is dead game over");
        }
    };
};

module.exports = Hero;