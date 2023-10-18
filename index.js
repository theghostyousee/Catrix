// function([string1, string2],target id,[color1,color2])    




document.addEventListener('DOMContentLoaded', function() {
  // Set the date we're counting down to
  var now = new Date().getTime();
  var countDownDate = new Date("2023-10-19T21:00:00+02:00").getTime(); // 19th October 2023 at 9PM CET



  // Update the countdown every second
  var x = setInterval(function() {

      // Get the current date and time
      var now = new Date().getTime();

      // Find the time difference between now and the countdown date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the "timer" div
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s";

      // If the countdown is finished, display some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "LIVE";
      }
  }, 1000);
});




consoleText(['Contract leaked ', '19th October Thursday..','3pm EST...' ,'LP will be added..', 'Recover it...']
, 'text',['rgb(13, 189, 72)','rgb(13, 189, 72)','rgb(13, 189, 72)']);


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#206a21'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}






/* another */


var x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function generateMixed(n) {
    let res = "";
    for (let i = 0; i < n; i++) {
        let id = Math.ceil(Math.random() * 80);
        res += x[id];
    }
    return res;
}

document.getElementById("tweet").addEventListener('click',clickonbody)

function clickonbody() {
    var text = "💿I've leaked @ComputerLeaks contract%0a%0a"
    var symbol = "0xd738390cA47Bb7b1cdf614377AEDE1B60B398Dc6 %0a%0a"
    var hash = "Launching the 19th October at 3pm EST." + "%0a%0a";
    var telegram = "https://t.me/ComputerLeaks"
    window.location.href = "https://twitter.com/intent/tweet?&text=\n" + text +symbol  + hash + telegram
}

window.onload = function() {
        document.getElementsByName("input")[0].addEventListener('change', doThing);
        function doThing() {
            if (this.value == "Help") {
                clickonbody();
            }
      }
}

