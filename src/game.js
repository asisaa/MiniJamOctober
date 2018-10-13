/*
Title: BO Animation Sprite
Author: Asisa Asseily

Libs: Kontra.js
https://straker.github.io/kontra/

*/

//loading the assets first and then starting the game
kontra.assets.imagePath = 'src/img';
kontra.assets.load('givepaw.png')
.then(function() {


/*
-_-_-_-_-_-_-_-_-_- INIT KONTRA ENGINE _-_-_-_-_-_-_-_-_-
*/

kontra.init();

//SHOW TEXT ON CANVAS
    var c = document.getElementById("game");
    var ctx = c.getContext("2d");
    ctx.font = "small-caps 26px Arial";
    ctx.lineWidth=2;


    var text = {
    showtext: function() {
      ctx.fillStyle="#0000ff";
      ctx.fillText("THIS IS THE OCTOBER MINI GAME JAM !", 20,40);
      }
    }

//spriteSheet
/*let dogimg = new Image();
dogimg.src = 'src/img/givepaw.png';

let spriteSheet = kontra.spriteSheet({
  image: dogimg,
  frameWidth: 32,
  frameHeight: 64,
  animations: {
    // create a named animation: walk
    paw: {
      frames: '0..1',  // frames 0 through 1
      frameRate: 2
    }
  }
});


var pawsprite = kontra.sprite({
    x: 80,
    y: 70,
    // use the sprite sheet animations for the sprite
    animations: spriteSheet.animations
  });

*/
/*
------_-_-_-_-_-_-_-_-_- START GAME LOOP FUNCTION_-_-_-_-_-_-_-_-_--------
*/

var loop = kontra.gameLoop({

  update: function() {
    //pawsprite.update();
  },

  render: function() {
    //pawsprite.render();
    text.showtext();
  }

});

//START GAME
  loop.start();
    }) //close assets loading/then function
