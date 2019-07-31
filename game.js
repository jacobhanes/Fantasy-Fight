var inquirer = require('inquirer');

function Hero(name, job, hitpoints, strength, luck, level) {
    this.name = name,
        this.job = job,
        this.hitpoints = hitpoints,
        this.strength = strength,
        this.luck = luck,
        this.level = level,
        this.pringInfo = function () {
            let heroInfo = [
                "Name: " + this.name,
                "Job: " + this.job,
                "HP: " + this.hitpoints,
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
        },
}
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
            {
                type: "checkbox",
                name: "stats",
                message: "Add 3 more stats",
                choices: ["Hitpoints", "Strength", "luck"]
            }
        ]).then(function (answer) {
            if (answer.job === "Warrior") {
                const warrior = new Hero(answer.Name, answer.job, 110, 4, 3, 1);
                heroMaxHP = 110;
            };
            if (answer.job === "Mage") {
                const mage = new Hero(answer.Name, answer.job, 60, 7, 5, 1);
                heroMaxHP = 60;
            };
            if (answer.job === "Theif") {
                const theif = new Hero(answer.Name, answer.job, 80, 5, 10, 1);
                heroMaxHP = 80;
            };
            if (answer.stats === "Hitpoints") {
                Hero.hitpoints += 30;
                heroMaxHP += 30;
            };
            if (answer.stats === "Strength") {
                Hero.strength += 3;
            };
            if (answer.stats === "luck") {
                Hero.luck += 3;
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