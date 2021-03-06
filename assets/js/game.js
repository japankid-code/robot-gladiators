var playerInfo = {
    name: "twinky", //window.prompt("What is your robo's name?");
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling the player's health by 20 for 7 buckaroos");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!!")
        }
    },
    upgradeAttack: function() {
        window.alert("upgrading player's attack by +6 for 7 player moneys");
        if (this.money >= 7) {
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!!")
        }
        
    }
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Annabelle Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "ROBBY TREMMMBLES",
        attack: randomNumber(10, 14)
    }
]

// Game states
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robos
//   * defeat each one
// "LOSE" - Player health less than 0

function randomNumber(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

var fight = function(enemy) {
    while (enemy.health > 0 && playerInfo.health > 0) {
        let promptFight = window.prompt("u fightin bro?\nFIGHT or SKIP ???")
        if (promptFight === "skip" || promptFight === "SKIP") {
            let confirmSkip = window.confirm("Are you certain you would like to skip this opponent?");
            if (confirmSkip) {
                console.log(`${playerInfo.name} has decided to skip this fight. SEE YA!!`)
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log(`${playerInfo.money}, player moneys`)
                break;
            }
        }
        //subtract enemy.health
        let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(`${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} remaining.`)
        if (enemy.health <= 0) {
            console.log(`${enemy.name} has died!`)
            playerInfo.money += 20;
            break;
        } else {};
        // Subtract playerInfo.health
        damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} remaining.`)
        if (playerInfo.health <= 0) {
            console.log(`${playerInfo.name} has died!`)
            break;
        } else {};
    }
}

var startGame = function() {
    // debugger; 
    // reset player stats at the start of the game
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`)
            let pickedEnemyObj = enemyInfo[i]
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (i < enemyInfo.length -1 && playerInfo.health >= 1) {
                var storeConfirm = window.confirm("Would you like to go to the shop?")
                shop();
            }
        } else {
            window.alert("You have lost in your robot battle! GAME OVER!!!")
            break;
        }
    }
    endGame();
}

var endGame = function() {
    // if the player is still alive you win
    if (playerInfo.health > 0) {
        window.alert(`Great job, you WON! Your score is ${playerInfo.money}`)
    } else {
        window.alert("Your robot got destroyed!! Better luck next time.")
    }

    var playAgainConfirm = window.confirm("You want to play again?")

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thanks for playing, come back SOOOOOOOOON!")
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("leaving the store presently.")
            break;
        default:
            window.alert("You did not pick a valid option. Try AGAIN!!!!!")
            shop();
            break;
    }
}

startGame();