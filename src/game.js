/*
Title: October Game Jam 2018
Author: Asisa Asseily, Pierre & alblitzxiii

Libs: Kontra.js
https://straker.github.io/kontra/

*/

//loading the assets first and then starting the game
kontra.assets.imagePath = 'src/img';
kontra.assets.load('monsterone.png','monstertwo.png','food_1_small.png','food_2_small.png','food_3_small.png','train.png','SecondLayerSea.png', 'FirstLayerSea.png', 'SeaThirdLayer.png', 'PlainBlueBG.png')
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
      ctx.fillStyle="#ffffff";
      ctx.fillText("PLASTIC TERROR", 20,40);
      }
    }

//THE MAIN PLAYER
    let monsterone = new Image();
    monsterone.src = 'src/img/monsterone.png';
    let monstertwo = new Image();
    monstertwo.src = 'src/img/monstertwo.png';

    var player = kontra.sprite({
        x: 80,
        y: 230,
        image: monsterone,
        dx: 0
      });

  //BACKGROUND
    let water = new Image();
    water.src = 'src/img/SeaFloor.png';
    var floor = kontra.sprite({
        x: 0,
        y: 546,
        image: water,
        dx: -1
      });

    let water2 = new Image();
    water2.src = 'src/img/SeaFloor.png';
    var floor2 = kontra.sprite({
        x: 1000,
        y: 546,
        image: water,
        dx: -1
      });

    let firstlayer = new Image();
    firstlayer.src = 'src/img/FirstLayerSea.png';
    var fl = kontra.sprite({
        x: 0,
        y: 400,
        image: firstlayer,
        dx: -1.1
      });

    let firstlayer2 = new Image();
    firstlayer2.src = 'src/img/FirstLayerSea.png';
    var fl2 = kontra.sprite({
        x: 1000,
        y: 400,
        image: firstlayer,
        dx: -1.1
      });

    let secondlayer = new Image();
    secondlayer.src = 'src/img/SecondLayerSea.png';
    var sl = kontra.sprite({
        x: 0,
        y: 300,
        image: secondlayer,
        dx: -3
      });

    let secondlayer2 = new Image();
    secondlayer2.src = 'src/img/SecondLayerSea.png';
    var sl2 = kontra.sprite({
        x: 1000,
        y: 300,
        image: secondlayer,
        dx: -3
      });

      let thirdlayer = new Image();
      thirdlayer.src = 'src/img/SeaThirdLayer.png';
      var tl = kontra.sprite({
          x: 0,
          y: 0,
          image: thirdlayer,
          dx: 0
        });


      let fourthlayer = new Image();
      fourthlayer.src = 'src/img/PlainBlueBG.png';
      var fol = kontra.sprite({
          x: 0,
          y: 0,
          image: fourthlayer,
          dx: 0
        });





//ARRAY WITH TRASH ITEMS
let foodone = new Image();
foodone.src = 'src/img/food_1_small.png';

let foodtwo = new Image();
foodtwo.src = 'src/img/food_2_small.png';

let foodthree = new Image();
foodthree.src = 'src/img/food_3_small.png';

var items = [

  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodone,
    dx: -2.5
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodone,
    dx: -2.5
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodone,
    dx: -2
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodone,
    dx: -2
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodone,
    dx: -2
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodtwo,
    dx: -2.5
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodtwo,
    dx: -2.5
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodtwo,
    dx: -2
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodtwo,
    dx: -2
  }),
  kontra.sprite({
    x: Math.random () * 1000,
    y: Math.random () * 600,
    width: 10,
    height: 5,
    image: foodtwo,
    dx: -2
  }),
  kontra.sprite({
      x: Math.random () * 1000,
      y: Math.random () * 600,
      width: 10,
      height: 5,
      image: foodthree,
      dx: -2
    }),
  kontra.sprite({
      x: Math.random () * 1000,
      y: Math.random () * 600,
      width: 10,
      height: 5,
      image: foodthree,
      dx: -2
    }),
  kontra.sprite({
      x: Math.random () * 1000,
      y: Math.random () * 600,
      width: 10,
      height: 5,
      image: foodthree,
      dx: -2.5
    }),
  kontra.sprite({
      x: Math.random () * 1000,
      y: Math.random () * 600,
      width: 10,
      height: 5,
      image: foodthree,
      dx: -2.5
    }),
  kontra.sprite({
      x: Math.random () * 1000,
      y: Math.random () * 600,
      width: 10,
      height: 5,
      image: foodthree,
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


  update: function() {
    console.log(score);


    /*
  -_-_-_-_-_-_-_-_-_- CONTROLES _-_-_-_-_-_-_-_-_-
  */

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

//Loop Trash Items Update
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

//Change Character Image
  if (score > 100) {
    player.image = monstertwo;
  }

//Loop Background
  if (floor.x <= -1000)
  { floor.x = 1000;}
    floor.update();

  if (floor2.x <= -1000)
  { floor2.x = 1000;}
  floor2.update();


  if (fl.x <= -1000)
  { fl.x = 990;}
    fl.update();

  if (fl2.x <= -1000)
  { fl2.x = 990;}
  fl2.update();

  if (sl.x <= -1000)
  { sl.x = 999;}
    sl.update();

  if (sl2.x <= -1000)
  { sl2.x = 999;}
  sl2.update();

    fol.update();
    tl.update();

    player.update ();

  },
//RENDER FUNCTION
  render: function() {
    //pawsprite.render();

    fol.render();
    tl.render();
    sl.render();
    sl2.render();
    fl.render();
    fl2.render();
    floor.render();
    floor2.render();

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
