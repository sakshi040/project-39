class Game{
    constructor(){

    }
    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  player=createSprite(70,150)
  player.addAnimation(mainImage)
  play(){
    if (index === player.index){
        cars[index - 1].shapeColor = "red";
        camera.position.y = displayWidth/2;
        camera.position.x = cars[index-1].x
      }
  }
}