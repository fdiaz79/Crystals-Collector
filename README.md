# Crystals-Collector
The classic Crystals collector game

This game has one button that will call two basic functions once it is clicked.

The first fucntion is intiialize. This function will create the initial conditions to start a game, like generating the points to match and the random values of each crystal by calling another fucntion called assPoints, that accepts 2 parameters to set the interval up.

When the function is initialized, each crystal is going to be assigned an object, and inside this object, there will be three properties, name, picture location and  points. This will make easier to implement changes in the future like adding more crystals, or changing the dysplayed images.

The initialize function will also disable the button, to avoid restarting game in the middle of it, without having finished it. And also will change the value of the variable that controls the end of the game to false, to allow the game to start.

After the initialize function is complete, the game will call the other main fucntion, which is called game(). This function checks first that the game is not currently running, to avoid adding the points of each crystal twice with each click. After checking this, the game starts adding into a variable the value of the image clicked adn adds one to the counter of turns played in the current game. It shows the number of turns in the screen and the compares the variable against the points that were previously generated. If the game is won or lost, it shows the correspondent message in the button, activates it to give the player the option of restarting a new game and changes the value of the variable that controls the end of the game to true, this to avoid the user adding more numbers to the score variable once the game has ended.

CLet's collect some Crystals here... https://fdiaz79.github.io/Crystals-Collector/
