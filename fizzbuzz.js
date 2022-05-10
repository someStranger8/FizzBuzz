
function play() {
  // ask for ai or player
  while (true) {
      var a = prompt("Would you like to play against the computer or another player? (c/p)");
      if (a === "c") {
          computer();
          break;
      } else if (a === "p") {
          player();
          break;
      } else {
          alert("Please enter c or p");
      }
  }
}

// computer
function computer() {
    // score, players turn, and other variables
    var p = true;
    var s = 0;
    var c = 1;

    // loop to keep the game going
    while (true) {
        // if player's turn
        if (p) {
            var f = prompt("Fizz Buzz! (f/b/fb)");

            if (c % 3 == 0 && c % 5 == 0) {
                if (f.toLowerCase() == "fb") {
                    s++;
                    c++;
                    p = false;
                }

                else {
                    break;
                }
            }

            else if (c % 3 == 0) {
                if (f.toLowerCase() == "f") {
                    s++;
                    c++;
                    p = false;
                }

                else {
                    break;
                }
            }

            else if (c % 5 == 0) {
                if (f.toLowerCase() == "b") {
                    s++;
                    c++;
                    p = false;
                }

                else {
                    break;
                }
            }

            else {
                if (f == c.toString()) {
                    s++;
                    c++;
                    p = false;
                }
              
                else {
                  break;
                }
            }
        }

        // if computer's turn
        else {
            if (c % 3 == 0 && c % 5 == 0) {
                alert("fizz buzz");
                c++;
                s++;
                p = true;
            }

            else if (c % 3 == 0) {
                alert("fizz");
                c++;
                s++;
                p = true;
            }

            else if (c % 5 == 0) {
                alert("buzz");
                c++;
                s++;
                p = true;
            }

            else {
                alert(c);
                c++;
                s++;
                p = true;
            }
        }
    }

    alert("You lose!\nYour score is " + s);
}

// player
function player() {
    var p_1 = true;
    var s_1 = 0;
    var s_2 = 0;
    var c = 1;

    while (true) {
        if (p_1) {
            var f = prompt("Fizz Buzz! (f/b/fb)");

            if (c % 3 == 0 && c % 5 == 0) {
                if (f.toLowerCase() == "fb") {
                    s_1++;
                    c++;
                    p_1 = false;
                }

                else {
                    break;
                }
            }

            else if (c % 3 == 0) {
                if (f.toLowerCase() == "f") {
                    s_1++;
                    c++;
                    p_1 = false;
                }

                else {
                    break;
                }
            }

            else if (c % 5 == 0) {
                if (f.toLowerCase() == "b") {
                    s_1++;
                    c++;
                    p_1 = false;
                }

                else {
                    break;
                }
            }

            else {
                if (f == c.toString()) {
                    s_1++;
                    c++;
                    p_1 = false;
                }

                else {
                    break;
                }
            }
        }

        else {
            var f = prompt("Fizz Buzz! (f/b/fb)");

            if (c % 3 == 0 && c % 5 == 0) {
                if (f.toLowerCase() == "fb") {
                    s_2++;
                    c++;
                    p_1 = true;
                }

                else {
                    break;
                }
            }

            else if (c % 3 == 0) {
                if (f.toLowerCase() == "f") {
                    s_2++;
                    c++;
                    p_1 = true;
                }

                else {
                    break;
                }
            }

            else if (c % 5 == 0) {
                if (f.toLowerCase() == "b") {
                    s_2++;
                    c++;
                    p_1 = true;
                }

                else {
                    break;
                }
            }

            else {
                if (f == c.toString()) {
                    s_2++;
                    c++;
                    p_1 = true;
                }

                else {
                    break;
                }
            }
        }
    }

    alert("Game Over!\nPlayer 1's score: " + s_1 + "\nPlayer 2's score: " + s_2);
}
