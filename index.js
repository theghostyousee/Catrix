// function([string1, string2],target id,[color1,color2])    
consoleText(['Data have been leaked','Accessing secure network...', 'Initiating system hack...', 'Overriding firewall protocols...',  'Encrypting data transfer...', 'Deleting trace logs...', 'Disconnecting from central server...',  'Exfiltration complete.', 'System overload. Shutting down.',  'Infiltrating deep web...', 'Acquiring sensitive information...', 'Establishing secure connection...']
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
    var text = "My data have been leaked by @ComputerLeaks.%0a%0a"
    var symbol = "−·−· ·− −· − −−−  − ·· − ·− −· −−− %0a%0a"
    var hash = "0x" + generateMixed(15);
    window.location.href = "https://twitter.com/intent/tweet?&text=\n" + text +symbol  + hash
}

window.onload = function() {
        document.getElementsByName("input")[0].addEventListener('change', doThing);
        function doThing() {
            if (this.value == "Help") {
                clickonbody();
            }
      }
}

