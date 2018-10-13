/*
Title: October Game Jam 2018
Author: Asisa Asseily, Pierre & alblitzxiii

Libs: Kontra.js
https://straker.github.io/kontra/

*/

//loading the assets first and then starting the game
kontra.assets.imagePath = 'src/img';
kontra.assets.load('monsterone.png')
.then(function() {

  //Variabel to keep track of the score
  var score = 0;
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
      ctx.fillText("PLASTIC TERROR", 20,40);
      }
    }

//THE MAIN PLAYER
    let monsterone = new Image();
    monsterone.src = 'src/img/monsterone.png';
    //let monstertwo = new Image();
    //monstertwo.src = 'monsterone.png';

    var player = kontra.sprite({
        x: 80,
        y: 230,
        image: monsterone,
        dx: 0
      });


//ARRAY WITH RGB ITEMS WHICH THE NEED TO COLLECT
    var items = [

      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'red',
        dx: -2.5
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'red',
        dx: -2.5
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'red',
        dx: -2
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'red',
        dx: -2
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'red',
        dx: -2
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'blue',
        dx: -2.5
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'blue',
        dx: -2.5
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'blue',
        dx: -2
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'blue',
        dx: -2
      }),
      kontra.sprite({
        x: Math.random () * 1000,
        y: Math.random () * 600,
        width: 10,
        height: 5,
        color: 'blue',
        dx: -2
      }),
      kontra.sprite({
          x: Math.random () * 1000,
          y: Math.random () * 600,
          width: 10,
          height: 5,
          color: '#00ff00',
          dx: -2
        }),
      kontra.sprite({
          x: Math.random () * 1000,
          y: Math.random () * 600,
          width: 10,
          height: 5,
          color: '#00ff00',
          dx: -2
        }),
      kontra.sprite({
          x: Math.random () * 1000,
          y: Math.random () * 600,
          width: 10,
          height: 5,
          color: '#00ff00',
          dx: -2.5
        }),
      kontra.sprite({
          x: Math.random () * 1000,
          y: Math.random () * 600,
          width: 10,
          height: 5,
          color: '#00ff00',
          dx: -2.5
        }),
      kontra.sprite({
          x: Math.random () * 1000,
          y: Math.random () * 600,
          width: 10,
          height: 5,
          color: '#00ff00',
          dx: -2
        })
    ];


/*
//spriteSheet
let dogimg = new Image();
dogimg.src = 'src/img/givepaw.png';


let spriteSheet = kontra.spriteSheet({
  image: dogimg,
  frameWidth: 32,
  frameHeight: 64,
  animations: {
    // create a named animation: walk
    paw: {
      frames: '0..1',  // frames 0 through 1
      frameRate: 20
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


  /*
-_-_-_-_-_-_-_-_-_- CONTROLES _-_-_-_-_-_-_-_-_-
*/


  update: function() {
    console.log(score);

    // control player with the keyboard

      if (kontra.keys.pressed('up')) {
        player.y -= 6;
      }

      if (kontra.keys.pressed('down')) {
        player.y += 6;
      }

      if (kontra.keys.pressed('right')) {
        player.x += 6;
      }

      if (kontra.keys.pressed('left')) {
        player.x -= 6;
      }


//When player leave the canvas it enters the canvas on the other side

      if (player.x >= 980) {
        player.x = 22;
      }

      else if (player.x <= 0) {
        player.x = 980;
      }

      if (player.y >= 580) {
        player.y = 22;
      }

      else if (player.y <= 0) {
        player.y = 500;
      }

//Loop and Items Update
    items.forEach(function(item){
      if (item.collidesWith(player)) {
        item.x = -200;
        score += 10;}
      if (item.x <= 0) {
        item.x = (Math.random() * 1000) + 1000;
        item.y = Math.random() * 600;
      }
      item.update();
      });
    //pawsprite.update();

    player.update();
  },
//RENDER FUNCTION
  render: function() {
    //pawsprite.render();

    items.forEach(function(item){
           item.render();
       });
    player.render();
    text.showtext();
  }

});

//START GAME
  loop.start();
    }) //close assets loading/then function
