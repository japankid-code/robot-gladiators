let playerName = "twinky"//window.prompt("What is your robo's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Annabelle Android", "ROBBY TREMMMBLES"];
let enemyHealth = 50;
let enemyAttack = 12;

// Game states
// "WIN" = Player robot has defeated all enemy robots
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
                playerMoney = playerMoney - 10;
                console.log(`${playerMoney}, player moneys`)
                break;
            }
        } // else {
        //     console.log("Please enter a valid response. Try again!")
        //     fight(enemyName)
        // }

        //subtract enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} remaining.`)
        if (enemyHealth <= 0) {
            console.log(`${enemyName} has died!`)
            playerMoney += 20;
            break;
        } else {
            // console.log(`${enemyName} still has ${enemyHealth} health remaining.`)
        }

        // Subtract playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} remaining.`)
        if (playerHealth <= 0) {
            console.log(`${playerName} has died!`)
            break;
        } else {
            // console.log(`${playerName} still has ${playerHealth} health remaining.`)
        } 
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    // debugger;
    let pickedEnemyName = enemyNames[i]
    enemyHealth = 50;
    fight(pickedEnemyName);
}