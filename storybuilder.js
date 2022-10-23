//main character image
const main = new Array("images/main/0.png","images/main/1.png", "images/main/2.png","images/main/3.png", "images/main/4.png","images/main/5.png", 
"images/main/6.png","images/main/7.png", "images/main/8.png","images/main/9.png", "images/main/10.png","images/main/11.png" );
const mainImage = document.querySelector("#main-img");

function findMain() {
    var n = Math.floor(Math.random() * main.length);
    document.getElementById("main-img").src = main[n];
}

//sidekick sidekick-img
const sidekick = new Array("images/sidekick/0.png","images/sidekick/1.png", "images/sidekick/2.png","images/sidekick/3.png", "images/sidekick/4.png","images/sidekick/5.png", 
"images/sidekick/6.png","images/sidekick/7.png", "images/sidekick/8.png","images/sidekick/9.png", "images/sidekick/10.png","images/sidekick/11.png" );
const sidekickImage = document.querySelector("#sidekick-img");

function findSidekick() {
    var n = Math.floor(Math.random() * sidekick.length);
    document.getElementById("sidekick-img").src = sidekick[n];
}

//object object-img
const object = new Array("images/object/0.png","images/object/1.png", "images/object/2.png","images/object/3.png", "images/object/4.png","images/object/5.png", 
"images/object/6.png","images/object/7.png", "images/object/8.png","images/object/9.png", "images/object/10.png","images/object/11.png","images/object/12.png", 
"images/object/13.png","images/object/14.png","images/object/15.png", "images/object/16.png","images/object/17.png","images/object/18.png", "images/object/19.png");
const objectImage = document.querySelector("#object-img");

function findObject() {
    var n = Math.floor(Math.random() * object.length);
    document.getElementById("object-img").src = object[n];
}

//place place-img
const place = new Array("images/place/0.png","images/place/1.png", "images/place/2.png","images/place/3.png", "images/place/4.png","images/place/5.png", 
"images/place/6.png","images/place/7.png", "images/place/8.png","images/place/9.png", "images/place/10.png","images/place/11.png","images/place/12.png", 
"images/place/13.png","images/place/14.png","images/place/15.png");
const placeImage = document.querySelector("#place-img");

function findPlace() {
    var n = Math.floor(Math.random() * place.length);
    document.getElementById("place-img").src = place[n];
}