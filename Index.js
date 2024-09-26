let currMoleTile;
let currPlantTile;
let score = 0;
let gameover = false;





window.onload = function(){
  setGame();
}

function setGame(){
  for(let i = 0; i < 9; i++){
    let tile = document.createElement("div");
    tile.id = i;
    tile.addEventListener("click",SelecTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole,1000);
  setInterval(setPlant , 2000)
}

function getRandomTile(){
let num = Math.floor(Math.random()*9);
return num.toString();
}





function setMole() {

  if(gameover){
    return;
  }
  // Clear previous mole
  if (currMoleTile && currMoleTile.firstChild) {
      currMoleTile.removeChild(currMoleTile.firstChild);
  }

  // Create new mole image
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  // Get random tile and append mole to it
  let num = getRandomTile();

  if(currPlantTile && currPlantTile.id == num){
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}


function setPlant() {
  if(gameover){
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if(currMoleTile && currMoleTile.id == num){
    return
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function SelecTile(){
  if(gameover){
    return;
  }

  if(this == currMoleTile){
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }else if(this == currPlantTile){
    document.getElementById("score").innerText = "GAME-OVER" +  score.toString();
    gameover = true;
  }
}