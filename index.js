let player1 = 0, player2 = 0, turn = true;
let p1 = '<div style="background-color: blue; height: 100px; width: 100px; margin:3px;"></div>';
let p2 = '<div style="background-color: red; height: 100px; width: 100px; margin:3px;"></div>';
let turn1Style = `<div style="border: solid 6px blue; border-radius: 25px;">Player 1</div>`;
let turn1NoStyle = `<div>Player 1</div>`;
let turn2Style = `<div style="border: solid 6px red; border-radius: 25px;">Player 2</div>`;
let turn2NoStyle = `<div>Player 2</div>`;


//indicates whose turn it is
let turnChecker = () =>{
  if(turn === false){
    document.getElementById("turn1").innerHTML = turn1Style;
    document.getElementById("turn2").innerHTML = turn2NoStyle;
}

if(turn === true){
    document.getElementById("turn2").innerHTML = turn2Style;
    document.getElementById("turn1").innerHTML = turn1NoStyle;
}  
};

//checks to see if both counters are at 0 before flipping coin
//if not it will show an alert

let beginGame = () => {
    if (player1 === 0 && player2 === 0) {
        console.log("turn was: " + turn)
        coinToss();
        console.log("it worked")
    } else {
        alert("turn not over");
        console.log("Player one: " + player1);
        console.log("Player two: " + player2);
        console.log("the turn is now: " + turn)
    }
};

//coin flip code

let coinToss = () => {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        heads();
        document.getElementById("coinResult").innerHTML = "heads [1 turn]";
    } else {
        tails();
        document.getElementById("coinResult").innerHTML = "tails [2 turns]";
    };
};

let heads = () => {
    if (turn === true) {
        player1 = 1;
        player2 = 0;
        turn = false;
        turnChecker();
    } else {
        player2 = 1;
        player1 = 0;
        turn = true;
        turnChecker();
    }
};

let tails = () => {
    if (turn === true) {
        player1 = 2;
        player2 = 0;
        turn = false;
        turnChecker();
    } else {
        player2 = 2;
        player1 = 0;
        turn = true;
        turnChecker();
    }
};

//this code is what changes the tile color depending on the counter and turn


//row 1
let tile1A = () => {
    if (player1 > 0) {
        document.getElementById("1A").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("1A").innerHTML = p2
        player2--;
    }
};

let tile1B = () => {
    if (player1 > 0) {
        document.getElementById("1B").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("1B").innerHTML = p2
        player2--;
    }
};

let tile1C = () => {
    if (player1 > 0) {
        document.getElementById("1C").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("1C").innerHTML = p2
        player2--;
    }
};

let tile1D = () => {
    if (player1 > 0) {
        document.getElementById("1D").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("1D").innerHTML = p2
        player2--;
    }
};

let tile1E = () => {
    if (player1 > 0) {
        document.getElementById("1E").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("1E").innerHTML = p2
        player2--;
    }
};


//row 2

let tile2A = () => {
    if (player1 > 0) {
        document.getElementById("2A").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("2A").innerHTML = p2
        player2--;
    }
};

let tile2B = () => {
    if (player1 > 0) {
        document.getElementById("2B").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("2B").innerHTML = p2
        player2--;
    }
};

let tile2C = () => {
    if (player1 > 0) {
        document.getElementById("2C").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("2C").innerHTML = p2
        player2--;
    }
};

let tile2D = () => {
    if (player1 > 0) {
        document.getElementById("2D").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("2D").innerHTML = p2
        player2--;
    }
};

let tile2E = () => {
    if (player1 > 0) {
        document.getElementById("2E").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("2E").innerHTML = p2
        player2--;
    }
};



//row 3

let tile3A = () => {
    if (player1 > 0) {
        document.getElementById("3A").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("3A").innerHTML = p2
        player2--;
    }
};

let tile3B = () => {
    if (player1 > 0) {
        document.getElementById("3B").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("3B").innerHTML = p2
        player2--;
    }
};

let tile3C = () => {
    if (player1 > 0) {
        document.getElementById("3C").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("3C").innerHTML = p2
        player2--;
    }
};

let tile3D = () => {
    if (player1 > 0) {
        document.getElementById("3D").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("3D").innerHTML = p2
        player2--;
    }
};

let tile3E = () => {
    if (player1 > 0) {
        document.getElementById("3E").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("3E").innerHTML = p2
        player2--;
    }
};



//row 4

let tile4A = () => {
    if (player1 > 0) {
        document.getElementById("4A").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("4A").innerHTML = p2
        player2--;
    }
};

let tile4B = () => {
    if (player1 > 0) {
        document.getElementById("4B").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("4B").innerHTML = p2
        player2--;
    }
};

let tile4C = () => {
    if (player1 > 0) {
        document.getElementById("4C").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("4C").innerHTML = p2
        player2--;
    }
};

let tile4D = () => {
    if (player1 > 0) {
        document.getElementById("4D").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("4D").innerHTML = p2
        player2--;
    }
};

let tile4E = () => {
    if (player1 > 0) {
        document.getElementById("4E").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("4E").innerHTML = p2
        player2--;
    }
};



//row 5

let tile5A = () => {
    if (player1 > 0) {
        document.getElementById("5A").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("5A").innerHTML = p2
        player2--;
    }
};

let tile5B = () => {
    if (player1 > 0) {
        document.getElementById("5B").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("5B").innerHTML = p2
        player2--;
    }
};

let tile5C = () => {
    if (player1 > 0) {
        document.getElementById("5C").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("5C").innerHTML = p2
        player2--;
    }
};

let tile5D = () => {
    if (player1 > 0) {
        document.getElementById("5D").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("5D").innerHTML = p2
        player2--;
    }
};

let tile5E = () => {
    if (player1 > 0) {
        document.getElementById("5E").innerHTML = p1
        player1--;
    }

    if (player2 > 0) {
        document.getElementById("5E").innerHTML = p2
        player2--;
    }
};

