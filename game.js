var inquirer = require('inquirer');
let Enemys = require("./enemy");
let Hero = require("./character");
const gnoll = new Enemys("Gnoll", 20, 20, 8, 8);

heroCreation();

function heroCreation() {

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
            
        ]).then(function (answer) {
            if (answer.job === "Warrior") {
                const warrior = new Hero(answer.Name, answer.job, 110, 110, 4, 3, 1);
                

                inquirer.prompt([
                    {
                        type: "list",
                        name: "stats",
                        message: "Add 3 more stats to 1 type",
                        choices: ["Hitpoints", "Strength", "luck"]
                    }
                ]).then(function (res) {
                    if (res.stats === "Hitpoints") {
                        warrior.chooseHp();
                       
                        
                    };
                    if (res.stats === "Strength") {
                        warrior.chooseStr();
                    };
                    if (res.stats === "luck") {
                        warrior.chooseLuck();
                    }
                    warrior.printInfo();
                    if (warrior.level < 10){
                        gameStart();
                    }
                    
                })

                
            };
            if (answer.job === "Mage") {
                const mage = new Hero(answer.Name, answer.job, 60, 60, 7, 5, 1);
                

                inquirer.prompt([
                    {
                        type: "list",
                        name: "stats",
                        message: "Add 3 more stats to 1 type",
                        choices: ["Hitpoints", "Strength", "luck"]
                    }
                ]).then(function (res) {
                    if (res.stats === "Hitpoints") {
                        mage.chooseHp();
                        heroMaxHP += 30;
                    };
                    if (res.stats === "Strength") {
                        mage.chooseStr();
                    };
                    if (res.stats === "luck") {
                        mage.chooseLuck();
                    }
                    mage.printInfo();
                    gameStart();
                })
            };
            if (answer.job === "Thief") {
                const theif = new Hero(answer.Name, answer.job, 80, 80, 5, 10, 1);
                

                inquirer.prompt([
                    {
                        type: "list",
                        name: "stats",
                        message: "Add 3 more stats to 1 type",
                        choices: ["Hitpoints", "Strength", "luck"]
                    }
                ]).then(function(res){
                    if (res.stats === "Hitpoints") {
                        theif.chooseHp();
                        
                    };
                    if (res.stats === "Strength"){
                        theif.chooseStr();
                    };
                    if (res.stats === "luck"){
                        theif.chooseLuck();
                    }
                    theif.printInfo();
                    
                })
            };
           
        });
}

function gameStart() {

    
        inquirer
        .prompt([
            {
                type: "list",
                name: "play",
                message: "What should your hero do?",
                choices: ["Fight", "Heal", "Stats"]
            }
        ]).then(function (playing) {
            if (playing.play === "Fight") {
                fightQuestions();
            }
        })
        
}

function fightQuestions(){
    inquirer.prompt([
        {
            type: "list",
            name: "fightQ",
            message: "What should we do?",
            choices: ["Attack", "Inspect"]
        }
    ]).then(function(answer){
        if (answer.fightQ === "Attack"){
            fight();
        }
        if (answer.fightQ === "Inspect"){
            enemy.EnemyInfo();
        }
    })
}


function fight() {
    Hero.hitpoints - enemy.strength;
    enemy.hitpoints - Hero.strength;
    Hero.printInfo();
    Enemy.enemyInfo();
}