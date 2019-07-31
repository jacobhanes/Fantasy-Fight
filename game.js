var inquirer = require('inquirer');
let enemys = require("./enemy");
let Hero = require("./character");

let enemyMaxHp = 0;
let heroMaxHP = 0;
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
            // {
            //     type: "checkbox",
            //     name: "stats",
            //     message: "Add 3 more stats",
            //     choices: ["Hitpoints", "Strength", "luck"]
            // }
        ]).then(function (answer) {
            if (answer.job === "Warrior") {
                const warrior = new Hero(answer.Name, answer.job, 110, 4, 3, 1);
                heroMaxHP = 110;

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
                        heroMaxHP += 30;
                    };
                    if (res.stats === "Strength") {
                        warrior.chooseStr();
                    };
                    if (res.stats === "luck") {
                        warrior.chooseLuck();
                    }
                    warrior.printInfo();

                })


            };
            if (answer.job === "Mage") {
                const mage = new Hero(answer.Name, answer.job, 60, 7, 5, 1);
                heroMaxHP = 60;

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

                })
            };
            if (answer.job === "Thief") {
                const theif = new Hero(answer.Name, answer.job, 80, 5, 10, 1);
                heroMaxHP = 80;

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
                        heroMaxHP += 30;
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
                choices: ["Fight", "Heal"]
            }
        ]).then(function (playing) {
            if (playing.play === "Fight") {

            }
        })
}

function fight() {
    Hero.hitpoints - enemy.strength;
}