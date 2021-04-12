var player;
var oP1;
var oP2;
var oP3;
var mainImage;
var oP1Image;
var oP2Image;
var oP3Image;
var roadImage;
var Ob1;
var Ob2;
var Ob3;
var Ob1Image;
var Ob2Image;
var Ob3Image;
var database;
var distance=0;
var gameState=0;
var canvas;

function preload(){
mainImage=loadAnimation("mainPlayer1.png","mainPlayer2.png","mainPlayer3.png")
Ob1Image=loadImage("obstacle1.png")
Ob2Image=loadImage("obstacle2.png")
Ob3Image=loadImage("obstacle3.png")
oP1Image=loadAnimation("opponent1.png","opponent2.png","opponent3.png")
oP2Image=loadAnimation("opponent4.png","opponent5.png","opponent6.png")
oP3Image=loadAnimation("opponent7.png","opponent8.png","opponent9.png")
roadImage=loadImage("Road.png")
}

function setup(){
    database=firebase.database();
    canvas=createCanvas(1200,300)
}

function draw(){

}