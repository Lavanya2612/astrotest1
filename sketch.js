var back_img  
var astro, astro_img



function preload(){}
back_img = loadImage('images/bg1.png')
atro_img = loadImage('images/astro.png')

function setup() {
  createCanvas(1000, 600);

  astro= createSprite(500,300,50,50)
  astro.addImage(astro_img)

  if(keyPressed('LEFT ARROW')){
  astro.x= astro.x-10
  }

  if(keyPressed('RIGHT ARROW')){
    astro.x= astro.x+10
    }

    if(keyPressed('DOWN ARROW')){
      astro.y= astro.y+10
      }

      if(keyPressed('UP ARROW')){
        astro.y= astro.y-10
        }

        
      if(keyPressed('L')){
        astro.angle= astro.angle-10
        }

        
      if(keyPressed('R')){
        astro.angle= astro.angle+10
  
}

star1= new Star({x:random (10,900)},50,50)
star2= new Star({x:random (10,900)},50,50)
star3= new Star({x:random (10,900)},50,50)
star4= new Star({x:random (10,900)},50,50)
star5= new Star({x:random (10,900)},50,50)
star6= new Star({x:random (10,900)},50,50)
star7= new Star({x:random (10,900)},50,50)
star8= new Star({x:random (10,900)},50,50)
star9= new Star({x:random (10,900)},50,50)
star10= new Star({x:random (10,900)},50,50)

paper1= new Paper({x:random (10,900)},50,50)
paper2= new Paper({x:random (10,900)},50,50)
paper3= new Paper({x:random (10,900)},50,50)
paper4= new Paper({x:random (10,900)},50,50)
paper5 =new Paper({x:random (10,900)},50,50)

stone1= new Stone({x:random (10,900)},50,50)
stone2= new Stone({x:random (10,900)},50,50)
stone3= new Stone({x:random (10,900)},50,50)
stone4= new Stone({x:random (10,900)},50,50)
stone5 =new Stone({x:random (10,900)},50,50)

}

function draw() {
  background(back_img);
  drawsprites()

  star1.display()
  star2.display()
  star3.display()
  star4.display()
  star5.display()
  star6.display()
  star7.display()
  star8.display()
  star9.display()
  star10.display()

  paper1.display()
  paper2.display()
  paper3.display()
  paper4.display()
  paper5.display()

  stone1.display()
  stone2.display()
  stone3.display()
  stone4.display()
  stone5.display()
}
