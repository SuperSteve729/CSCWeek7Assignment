function playCraps() {
    console.log("playCraps() is running!");
    var die1 = Math.ceil(Math.random() * 6); //Selects random num 0-1 multiplied by 6 for die 1
    var die2 = Math.ceil(Math.random() * 6); //Selects random num 0-1 multiplied by 6 for die 2
    var sum = die1 + die2 //Add up dice
    
    document.getElementById("die1").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2").innerHTML = "Die 2 = " + die2;
    document.getElementById("sum").innerHTML = "Sum of dice: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "DOUBLES - you win";
    }
    else {
        document.getElementById("crapsResults").innerHTML = "NOTHING - you drawed, please try again";
    }
}

function blastOff() {
    var currTime = 50;
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 5000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 10000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 15000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 20000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 25000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 30000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 35000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 40000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 45000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
    }, 50000);
}

function betterBlastOff() {
    console.log("betterBlastOff() has started");
    var currTime = 50; //Amount of time
    var halfTime = currTime / 2; //Halfway point of time
    document.getElementById("countDownTimer").style.fontSize = "xx-large";
    for(var i = 0; i < 51; i++) {
        setTimeout(function(){
            if (currTime == 0) {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = "Blast off!"; 
                //Last timeout, gets set to this instead of just saying 0
            } else if (currTime < halfTime) {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = "Warning, timer is less than halfway! Time left: " + currTime; 
                //Sets last timeouts to this if under the halfway point
            } else {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = currTime; 
                //Every other timeout function, just shows the number
            }
            currTime -= 1; //Subtracts it by timer incrementation for when appearing on the screen, should be by 5
        }, 1000 * i);
    }
}

function start() {
    console.log("start() is running");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    console.log("stop() is running");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}