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
    let promptFight = "fight" // window.prompt("u fightin bro?\nFIGHT or SKIP ???")
    

    while (enemyHealth > 0) {
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //console.log(`${playerName}, the ghift has beginned.`)
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} remaining.`)
            if (enemyHealth <= 0) {
                // console.log(`${enemyName} has died!`)
            }
            else {
                // console.log(`${enemyName} still has ${enemyHealth} health remaining.`)
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} remaining.`)
            if (playerHealth <= 0) {
                // console.log(`${playerName} has died!`)
            }
            else {
                // console.log(`${playerName} still has ${playerHealth} health remaining.`)
            }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            let confirmSkip = window.confirm("Are you certain you would like to quit?");
            if (confirmSkip) {
                console.log(`${playerName} has decided to skip this fight. SEE YA!!`)
                playerMoney = playerMoney -2;
            } else {
                fight();
            }
        } else {
            console.log("Please enter a valid response. Try again!")
        }
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    let pickedEnemyName = enemyNames[i]
    enemyHealth = 50;
    fight(pickedEnemyName);
}