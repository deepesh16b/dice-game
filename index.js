var random1 = Math.floor(Math.random()*6) + 1;
var random2 = Math.floor(Math.random()*6) + 1;
var dice1Path = "images/dice" + random1 + ".png";
var dice2Path = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dice1Path);
document.querySelectorAll("img")[1].setAttribute("src", dice2Path);
function winner()
{
    var winner_name = "";
    if(random1>random2)
        winner_name  = "Player 1 Win";
    else if(random2>random1)
        winner_name = "Player 2 Win";
    else
        winner_name = "It's a Draw";
    return winner_name;
}
document.querySelector("h1").textContent = winner();