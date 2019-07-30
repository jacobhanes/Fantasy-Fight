var inquirer = require('inquirer');

function Hero(name, job, hitpoints, strength, luck, level){
    this.name = name,
    this.job = job,
    this.hitpoints = hitpoints,
    this.strength = strength,
    this.luck = luck,
    this.level = level,
    this.pringInfo = function(){
      let heroInfo = [
           "Name: " + this.name,
           "Job: " + this.job,
           "HP: " + this.hitpoints,
           "Strength: " + this.strength,
           "Luck(crit): " + this.luck,
        ].join("\n");
        console.log(heroInfo);
    }
}
