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
heroCreation();
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
    ]).then(function(answer){
        if (answer.job === "Warrior"){
            const warrior = new Hero(answer.Name, answer.job, 110, 4, 3, 1);
            
        };
        if (answer.job === "Mage"){
            const mage = new Hero(answer.Name, answer.job, 60, 7, 5, 1);
            
        };
        if (answer.job === "Theif"){
            const theif = new Hero(answer.Name, answer.job, 80, 5, 10, 1);
            
        };
        if (answer.stats === "Hitpoints"){
            Hero.hitpoints += 3;
        };
        if(answer.stats === "Strength"){
            Hero.strength += 3;
        };
        if(answer.stats === "luck"){
            Hero.luck += 3;
        };
        
    }) 
}