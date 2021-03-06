// VARIABLES
// ==============================================
var obi = {
  name: "Obi-Wan Kenobi",
  image: "assets/images/Obi-wan.png",
  lightsaber: {"box-shadow" : "0 0 8px 3px rgb(148, 167, 231)"},
  health: 120,
  baseHealth: 120,
  attack: 8,
  stronger: 8,
  counterAttack: 15,
}
var luke = {
  name: "Luke Skywalker",
  image: "assets/images/Luke.jpg",
  lightsaber: {"box-shadow" : "0 0 8px 3px green"},
  health: 100,
  baseHealth: 100,
  attack: 15,
  stronger: 15,
  counterAttack: 5,
}
var sidious = {
  name: "Darth Sidious",
  image: "assets/images/Darth_Sidious.jpg",
  lightsaber: {"box-shadow" : "0 0 8px 3px red"},
  health: 150,
  baseHealth: 150,
  attack: 10,
  stronger: 10,
  counterAttack: 20,
}
var maul = {
  name: "Darth Maul",
  image: "assets/images/Darth_Maul.png",
  lightsaber: {"box-shadow" : "0 0 8px 3px red"},
  health: 180,
  baseHealth: 180,
  attack: 6,
  stronger: 6,
  counterAttack: 25,
}
var loader = {
  name: "spinning lightsaber",
  image: "assets/images/starwars-loader.gif",
  lightsaber: {"box-shadow" : "0 0 8px 3px grey"},
}
var user = $("#user");
var defender = $("#defender");
var one = $("<img>");
var two = $("<img>");
var three = $("<img>");

// CHOOSE YOUR FIGHTER
// ==============================================
// On click, choose a character
function startGame(img) {

  switch (img.target.id) {
    case "obi":
      // Show character under "user"
      user.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;

    case "luke":
      // Show character under "user"
      user.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;
    
    case "sid":
      // Show character under "user"
      user.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;

    case "maul":
      // Show character under "user"
      user.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy3");
      break;
  }
// Show fight arena
  $(".arena").toggle();

// Hide character select
  $(".charSelect").toggle();

}

// CHOOSE AN ENEMY
// ==============================================
// On click, choose an enemy
function chooseEnemy(img) {

  switch (img.target.alt) {
    case luke.name:
      // Show character under "user"
      defender.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;
    
    case obi.name:
      // Show character under "user"
      defender.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;

    case sidious.name:
      // Show character under "user"
      defender.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;

    case maul.name:
      // Show character under "user"
      defender.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;
  }


  function waiting() {
    if (img.target.id === "one") {
      one.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#enemy1");
    }
    else if (img.target.id === "two") {
      two.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#enemy2");
    }
    else if (img.target.id === "three") {
      three.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#enemy3");
    }
  }
// If enemy health = 0, show greyed out and make unclickable
}

// FIGHT
// ==============================================
// On button click
function fight() {
  // If user character health is 0, you lost
  if (user.attr("alt") === obi.name && obi.health <= 0 || user.attr("alt") === luke.name && luke.health <= 0 || user.attr("alt") === sidious.name && sidious.health <=0 || user.attr("alt") === maul.name && maul.health <= 0) {
    alert("You lost");
    reset();
  }

  //  If all enemies have health 0, you won
  else if ($("#one").hasClass("defeated") && $("#two").hasClass("defeated") && $("#three").hasClass("defeated")) {
    alert("You won");
    reset();
  }

  // If user health and at least one enemy health is above 0, play the game
  else {
    // If user chooses obi ========================================================
    if (user.attr("alt") === obi.name) {
      // Set max health to users base health
      $("#userHealth").attr("max", obi.baseHealth);

      // If enemy is Luke
      if (defender.attr("alt") === luke.name) {
        $("#enemyHealth").attr("max", luke.baseHealth);

        // Loop until enemy health is 0 or below
        if (luke.health <= 0) {
          one.attr("src", luke.image).attr("alt", luke.name).appendTo("#enemy1");
          defeatedOne();
        }

        else {
          // Take health from enemy based on user attack value
          luke.health = luke.health - obi.stronger;
          $("#enemyHealth").attr("value", luke.health);
          // Take health from user based on enemy counter attack value
          obi.health = obi.health - luke.counterAttack;
          $("#userHealth").attr("value", obi.health);
          // Add to user attack value
          obi.stronger = obi.stronger + obi.attack;
        }
      }

      // If enemy is Darth Sidious
      else if (defender.attr("alt") === sidious.name) {
        $("#enemyHealth").attr("max", sidious.baseHealth);

        // Loop until enemy health is 0 or below
        if (sidious.health <= 0) {
          two.attr("src", sidious.image).attr("alt", sidious.name).appendTo("#enemy2");
          defeatedTwo();
        }

        else {
          // Take health from enemy based on user attack value
          sidious.health = sidious.health - obi.stronger;
          $("#enemyHealth").attr("value", sidious.health);
          // Take health from user based on enemy counter attack value
          obi.health = obi.health - sidious.counterAttack;
          $("#userHealth").attr("value", obi.health);
          // Add to user attack value
          obi.stronger = obi.stronger + obi.attack;
        }
      }

      // If enemy is Darth Maul 
      else if (defender.attr("alt") === maul.name) {
        $("#enemyHealth").attr("max", maul.baseHealth);

        // Loop until enemy health is 0 or below
        if (maul.health <= 0) {
          three.attr("src", maul.image).attr("alt", maul.name).appendTo("#enemy3");
          defeatedThree();
        }

        else {
          // Take health from enemy based on user attack value
          maul.health = maul.health - obi.stronger;
          $("#enemyHealth").attr("value", maul.health);
          // Take health from user based on enemy counter attack value
          obi.health = obi.health - maul.counterAttack;
          $("#userHealth").attr("value", obi.health);
          // Add to user attack value
          obi.stronger = obi.stronger + obi.attack;
        }
      }
    }

    // If user chooses luke =======================================================
    else if (user.attr("alt") === luke.name) {
      // Set max health to users base health
      $("#userHealth").attr("max", luke.baseHealth);

      // If enemy is Obi
      if (defender.attr("alt") === obi.name) {
        $("#enemyHealth").attr("max", obi.baseHealth);

        // Loop until enemy health is 0 or below
        if (obi.health <= 0) {
          one.attr("src", obi.image).attr("alt", obi.name).appendTo("#enemy1");
          defeatedOne();
        }

        else {
          // Take health from enemy based on user attack value
          obi.health = obi.health - luke.stronger;
          $("#enemyHealth").attr("value", obi.health);
          // Take health from user based on enemy counter attack value
          luke.health = luke.health - obi.counterAttack;
          $("#userHealth").attr("value", luke.health);
          // Add to user attack value
          luke.stronger = luke.stronger + luke.attack;
        }
      }

      // If enemy is Darth Sidious
      else if (defender.attr("alt") === sidious.name) {
        $("#enemyHealth").attr("max", sidious.baseHealth);

        // Loop until enemy health is 0 or below
        if (sidious.health <= 0) {
          two.attr("src", sidious.image).attr("alt", sidious.name).appendTo("#enemy2");
          defeatedTwo();
        }

        else {
          // Take health from enemy based on user attack value
          sidious.health = sidious.health - luke.stronger;
          $("#enemyHealth").attr("value", sidious.health);
          // Take health from user based on enemy counter attack value
          luke.health = luke.health - sidious.counterAttack;
          $("#userHealth").attr("value", luke.health);
          // Add to user attack value
          luke.stronger = luke.stronger + luke.attack;
        }
      }

      // If enemy is Darth Maul 
      else if (defender.attr("alt") === maul.name) {
        $("#enemyHealth").attr("max", maul.baseHealth);

        // Loop until enemy health is 0 or below
        if (maul.health <= 0) {
          three.attr("src", maul.image).attr("alt", maul.name).appendTo("#enemy3");
          defeatedThree();
        }

        else {
          // Take health from enemy based on user attack value
          maul.health = maul.health - luke.stronger;
          $("#enemyHealth").attr("value", maul.health);
          // Take health from user based on enemy counter attack value
          luke.health = luke.health - maul.counterAttack;
          $("#userHealth").attr("value", luke.health);
          // Add to user attack value
          luke.stronger = luke.stronger + luke.attack;
        }
      }
    }

    // If user chooses darth sidious ==============================================
    else if (user.attr("alt") === sidious.name) {
      // Set max health to users base health
      $("#userHealth").attr("max", sidious.baseHealth);

      // If enemy is Obi
      if (defender.attr("alt") === obi.name) {
        $("#enemyHealth").attr("max", obi.baseHealth);

        // Loop until enemy health is 0 or below
        if (obi.health <= 0) {
          one.attr("src", obi.image).attr("alt", obi.name).appendTo("#enemy1");
          defeatedOne();
        }

        else {
          // Take health from enemy based on user attack value
          obi.health = obi.health - sidious.stronger;
          $("#enemyHealth").attr("value", obi.health);
          // Take health from user based on enemy counter attack value
          sidious.health = sidious.health - obi.counterAttack;
          $("#userHealth").attr("value", sidious.health);
          // Add to user attack value
          sidious.stronger = sidious.stronger + sidious.attack;
        }
      }

      // If enemy is Luke
      if (defender.attr("alt") === luke.name) {
        $("#enemyHealth").attr("max", luke.baseHealth);

        // Loop until enemy health is 0 or below
        if (luke.health <= 0) {
          two.attr("src", luke.image).attr("alt", luke.name).appendTo("#enemy2");
          defeatedTwo();
        }

        else {
          // Take health from enemy based on user attack value
          luke.health = luke.health - sidious.stronger;
          $("#enemyHealth").attr("value", luke.health);
          // Take health from user based on enemy counter attack value
          sidious.health = sidious.health - luke.counterAttack;
          $("#userHealth").attr("value", sidious.health);
          // Add to user attack value
          sidious.stronger = sidious.stronger + sidious.attack;
        }
      }

      // If enemy is Darth Maul 
      else if (defender.attr("alt") === maul.name) {
        $("#enemyHealth").attr("max", maul.baseHealth);

        // Loop until enemy health is 0 or below
        if (maul.health <= 0) {
          three.attr("src", maul.image).attr("alt", maul.name).appendTo("#enemy3");
          defeatedThree();
        }

        else {
          // Take health from enemy based on user attack value
          maul.health = maul.health - sidious.stronger;
          $("#enemyHealth").attr("value", maul.health);
          // Take health from user based on enemy counter attack value
          sidious.health = sidious.health - maul.counterAttack;
          $("#userHealth").attr("value", sidious.health);
          // Add to user attack value
          sidious.stronger = sidious.stronger + sidious.attack;
        }
      }
    }

    // If user chooses darth maul =================================================
    else if (user.attr("alt") === maul.name) {
      // Set max health to users base health
      $("#userHealth").attr("max", maul.baseHealth);

      // If enemy is Obi
      if (defender.attr("alt") === obi.name) {
        $("#enemyHealth").attr("max", obi.baseHealth);

        // Loop until enemy health is 0 or below
        if (obi.health <= 0) {
          one.attr("src", obi.image).attr("alt", obi.name).appendTo("#enemy1");
          defeatedOne();
        }

        else {
          // Take health from enemy based on user attack value
          obi.health = obi.health - maul.stronger;
          $("#enemyHealth").attr("value", obi.health);
          // Take health from user based on enemy counter attack value
          maul.health = maul.health - obi.counterAttack;
          $("#userHealth").attr("value", maul.health);
          // Add to user attack value
          maul.stronger = maul.stronger + maul.attack;
        }
      }

      // If enemy is Luke
      if (defender.attr("alt") === luke.name) {
        $("#enemyHealth").attr("max", luke.baseHealth);

        // Loop until enemy health is 0 or below
        if (luke.health <= 0) {
          two.attr("src", luke.image).attr("alt", luke.name).appendTo("#enemy2");
          defeatedTwo();
        }

        else {
          // Take health from enemy based on user attack value
          luke.health = luke.health - maul.stronger;
          $("#enemyHealth").attr("value", luke.health);
          // Take health from user based on enemy counter attack value
          maul.health = maul.health - luke.counterAttack;
          $("#userHealth").attr("value", maul.health);
          // Add to user attack value
          maul.stronger = maul.stronger + maul.attack;
        }
      }

      // If enemy is Darth Sidious 
      else if (defender.attr("alt") === sidious.name) {
        $("#enemyHealth").attr("max", sidious.baseHealth);

        // Loop until enemy health is 0 or below
        if (sidious.health <= 0) {
          three.attr("src", sidious.image).attr("alt", sidious.name).appendTo("#enemy3");
          defeatedThree();
        }

        else {
          // Take health from enemy based on user attack value
          sidious.health = sidious.health - maul.stronger;
          $("#enemyHealth").attr("value", sidious.health);
          // Take health from user based on enemy counter attack value
          maul.health = maul.health - sidious.counterAttack;
          $("#userHealth").attr("value", maul.health);
          // Add to user attack value
          maul.stronger = maul.stronger + maul.attack;
        }
      }
    }
  }
}

// WIN/LOSE
// ==============================================
// If defeated enemy, loop to choose an enemy

function defeatedOne() {
  one.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy1");
  defender.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#defender");
  $("#enemyHealth").attr("max", 100).attr("value", 100);
}

function defeatedTwo() {
  two.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy2");
  defender.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#defender");
  $("#enemyHealth").attr("max", 100).attr("value", 100);
}

function defeatedThree() {
  three.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy3");
  defender.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber).appendTo("#defender");
  $("#enemyHealth").attr("max", 100).attr("value", 100);
}

// If lose, loop to reset

// ==============================================
// RESET
function reset() {
  // Hide fight arena
  $(".arena").toggle();

  // Show character select
  $(".charSelect").toggle();

  // Reset all health
  obi.health = 120;
  luke.health = 100;
  sidious.health = 150;
  maul.health = 180;

  // Reset all stronger attack
  obi.stronger = obi.attack;
  luke.stronger = luke.attack;
  sidious.stronger = sidious.attack;
  maul.stronger = maul.attack;

  // Reset classes on enemies available to attack
  one.removeClass("defeated").addClass("ready").css({"pointer-events" : "auto"}).appendTo("#enemy1");
  two.removeClass("defeated").addClass("ready").css({"pointer-events" : "auto"}).appendTo("#enemy2");
  three.removeClass("defeated").addClass("ready").css({"pointer-events" : "auto"}).appendTo("#enemy3");

  // Reset defender img for when lost
  defender.attr("src", loader.image).attr("alt", loader.name).css(loader.lightsaber);

  // Reset health values
  $("#userHealth").attr("max", 100).attr("value", 100);
  $("#enemyHealth").attr("max", 100).attr("value", 100);

}
// ==============================================
// CALL FUNCTIONS
$(document).ready(function() {
  $(".choose").click(startGame);
  $(".ready").click(chooseEnemy);
  $("button").click(fight);
});