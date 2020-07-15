let doorImage1 = document.getElementById('door1');let doorImage2 = document.getElementById('door2');let doorImage3 = document.getElementById('door3');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoor="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById("start");
let playing=true;

randomChoreDoorGenerator();

let isBot = (door) =>{
  if(door.src===botDoorPath){
    return true;
  }
  return false;
}
let gameOver= (stat) =>{
  if(stat==='win'){
    startButton.innerHTML="YOU WIN ! PLAY AGAIN ? ";
  }
  else{
    startButton.innerHTML= "Game over! Play again?";
  }
  playing=false;
}
let isClicked= a => {
  if(a.src===closedDoorPath){
    return false;
  }
  return true;
}
let playDoor= (door) =>{
  numClosedDoors--;
  if (numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver('no');
  }
}
let randomChoreDoorGenerator= () => {
  let choreDoor = Math.floor(Math.random()*3);
    if(choreDoor===0){
      openDoor1=botDoorPath;
      openDoor2= beachDoor;
      openDoor3=spaceDoorPath;
    }
    if(choreDoor===1){
      openDoor2=botDoorPath;
      openDoor1= beachDoor;
      openDoor3=spaceDoorPath;
    }
    if(choreDoor===2){
      openDoor3=botDoorPath;
      openDoor2= beachDoor;
      openDoor1=spaceDoorPath;
    }
}

doorImage1.onclick = () => {
  if(isClicked(doorImage1)===false && playing){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if(isClicked(doorImage2)===false && playing){
  doorImage2.src =openDoor2;
  playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(isClicked(doorImage3)===false && playing){
  doorImage3.src =openDoor3 ;
  playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if(!playing) {
    startRound();
  }
}

function startRound(){
  numClosedDoors=3;
  doorImage1.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  startButton.innerHTML='Good LUCK !!!';
  playing=true;
  randomChoreDoorGenerator();
}
