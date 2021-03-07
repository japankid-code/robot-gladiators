let playerName = "twinky"//window.prompt("What is your robo's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Annabelle Android", "ROBBY TREMMMBLES"];
let enemyHealth = 50;
let enemyAttack = 12;

// Game states
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robos
//   * defeat each one
// "LOSE" - Player health less than 0

var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        let promptFight = window.prompt("u fightin bro?\nFIGHT or SKIP ???")
        if (promptFight === "skip" || promptFight === "SKIP") {
            let confirmSkip = window.confirm("Are you certain you would like to skip this opponent?");
            if (confirmSkip) {
                console.log(`${playerName} has decided to skip this fight. SEE YA!!`)
                playerMoney = Math.max(0, playerMoney - 10);
                console.log(`${playerMoney}, player moneys`)
                break;
            }
        }

        //subtract enemyHealth
        enemyHealth = Math.max(0, enemyHealth - enemyAttack);
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} remaining.`)
        if (enemyHealth <= 0) {
            console.log(`${enemyName} has died!`)
            playerMoney += 20;
            break;
        } else {};

        // Subtract playerHealth
        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} remaining.`)
        if (playerHealth <= 0) {
            console.log(`${playerName} has died!`)
            break;
        } else {};
    }
}

var startGame = function() {
    // debugger; 
    // reset player stats at the start of the game
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`)
            let pickedEnemyName = enemyNames[i]
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length -1) {
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
    if (playerHealth > 0) {
        window.alert(`Great job, you WON! Your score is ${playerMoney}`)
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
            if (playerMoney >= 7) {
                window.alert("Refilling the player's health by 20 for 7 buckaroos")
                playerHealth += 20;
                playerMoney -= 7;
                break;
            }
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("upgrading player's attack by +6 for 7 player moneys")
                playerAttack += 6;
                playerMoney -= 7;
                break;
            }
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