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
           "Level: " + this.level
        ].join("\n");
        console.log(heroInfo);
    }
}
function heroCreation(){

    inquirer
    .prompt([
        {
            type: "input",
            name: "Name",
            message: "Hero's Name?"
        },
        {
            type: "list",
            name: "job",
            message: "Choose a job",
            choices: ["Warrior", "Mage", "Thief"]
        },
        {
            type: "checkbox",
            name: "stats",
            message: "Add 3 more stats",
            choices: ["Hitpoints", "Strength", "luck"]
        }
    ])
}