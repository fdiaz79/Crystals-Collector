$(document).ready(function (){
    var bestRound = 100;
    var winCount = 0;
    var loseCount = 0;
    var turnCount = 0;
    var score;
    var points;
    var gameRunning = false;
    var finishedGame = true;

    var diamondObj;
    var emeraldObj;
    var rubyObj;
    var sapphireObj;

    var playButton = document.getElementById('play-button');
    playButton.disabled = false;

    //Generates a random number between min and max to assign to the crystals when creating the object and to the points variable which is the total score to get
    var assPoints = function(min, max){ //function assPoints() {}; to work everywhere in the programm
        return(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function crystalConstruct (crname, crimage) {
        this.crystalName = crname;
        this.crystalImage = crimage;
        this.crystalPoints = assPoints(1,12);
    }

    //to avoid repeated values on the crystals
    function comparePoints (dp,ep,rp,sp) {
        var a=1;
        var b=1;    
        do {
            console.log("before "+ dp, ep, rp,sp);
            while (dp===ep || dp===rp || dp===sp){
                dp = assPoints(1,12);
                console.log("1 " + dp,ep,rp,sp);
                a=1;
                b=1;
            }
            while (ep===rp || ep===sp){
                ep = assPoints(1,12);
                console.log("2 " + dp,ep,rp,sp);
                if (ep!=dp){
                    a=1;
                } else {
                    a=0;
                }
            }
            while (rp===sp) {
                rp = assPoints(1,12);
                console.log("3 " + dp,ep,rp,sp);
                if (rp!=ep && rp!=dp) {
                    b=1;
                } else {
                    b=0;
                }
            }
            console.log("after "+ dp, ep, rp, sp);
        } while (a==0 || b==0);
        return {dp, ep, rp, sp};
      
    };

    $("#play-button").click(function () {
        initialize();
        game();
    });
    

    function initialize () {
        // alert ("initialize started");
        score = 0;
        turnCount = 0;
        points = assPoints(19,120);

        // creates the objects and its properties
        diamondObj = new crystalConstruct("Diamond", "assets/images/diamond.png");
        emeraldObj = new crystalConstruct("Emerald", "assets/images/emerald.png");
        rubyObj = new crystalConstruct("Ruby", "assets/images/ruby.png");
        sapphireObj = new crystalConstruct("Sapphire", "assets/images/sapphire.png");

        // add the value to the points property of each object
        var temp = comparePoints (diamondObj.crystalPoints, emeraldObj.crystalPoints, rubyObj.crystalPoints, sapphireObj.crystalPoints);
        diamondObj.crystalPoints = temp.dp;
        emeraldObj.crystalPoints = temp.ep;
        rubyObj.crystalPoints = temp.rp;
        sapphireObj.crystalPoints = temp.sp;
        $("#play-button").text("Start clicking on  those crystals!!!");
        finishedGame = false;

        //console.log(diamondObj, emeraldObj, rubyObj,sapphireObj);

        // assign the points of each object to its correspondant element in html
        $("#diamond").attr("value",diamondObj.crystalPoints);
        $("#emerald").attr("value",emeraldObj.crystalPoints);
        $("#ruby").attr("value",rubyObj.crystalPoints);
        $("#sapphire").attr("value",sapphireObj.crystalPoints);

        //displays on the window the initial values 
        $("#points").text(points);
        $("#score-count").text(score);
        $("#turns-count").text(turnCount);
        console.log(points, score);

        playButton.disabled = true;
    };

    function game () {
        // alert ("game started");
        if (!gameRunning) {
            gameRunning = true;
            $(".crystal-img").click(function(){
                if (!finishedGame) {
                    // capture the value of the clicked image and add it to the score
                    var altAtt = $(this).attr("value");
                    score = score+parseInt(altAtt);
                    $("#score-count").text(score);
                    
                    // add 1 turn
                    turnCount++;
                    $("#turns-count").text(turnCount);
                    console.log(turnCount);

                    // comparison to determine if win, lose or keep playing

                    if (score > points) {
                        loseCount++;
                        $("#losses-count").text(loseCount);
                        playButton.disabled = false;
                        $("#play-button").text("You lost, Do you want to play again?");//playButton.text("something"); NOT WORKING, WHY??
                        finishedGame = true;
                    }
                    else if (score == points) {
                        winCount++;
                        $("#win-count").text(winCount);
                        playButton.disabled = false;
                        $("#play-button").text("You won, Care to give me another chance?");
                        if (turnCount < bestRound){
                            bestRound = turnCount;
                            $("#best-count").text(bestRound);

                        }
                        finishedGame = true;
                    }
                    else{
                        $("#play-button").text("Keep clicking on  those crystals!!!");
                    }
                }

            });
        }
        // var numClicked = $(this).val(); $(".number").click( function ()  
    };

    

    
    // var diamondObj = new crystalConstruct("Diamond", "assets/images/diamond.png");
    // var emeraldObj = new crystalConstruct("Emerald", "assets/images/emerald.png");
    // var rubyObj = new crystalConstruct("Ruby", "assets/images/ruby.png");
    // var sapphireObj = new crystalConstruct("Sapphire", "assets/images/sapphire.png");
});