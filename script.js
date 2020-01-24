const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
//const boton1=document.getElementById("boton1")
let interval;
let frames=0;
let gameover=false;
let puntuacion=0;
let pisoA=[];
let enemigosA=[];
let Twoplayer=false;
let rMenu=false;
let puntP1=0;
let puntP2=0;
let srcJugador2;
let srcJugador1;


const images={
    background0:"Images/background.png",
    background1:"Images/background.jpg",
    background2:"Images/background1.jpg",
    background3:"Images/background2.png",
    piso0:"Images/piso5.png",
    piso1:"Images/piso5.png",
    piso2:"Images/piso6.png",
    piso3:"Images/piso7.png",
    piso4:"Images/piso8.png",
    enemigo1:"Images/Enemigo1.png",
    enemigo2:"Images/Enemigo2.png",
    enemigo3:"Images/Enemigo3.png",
    enemigo4:"Images/Enemigo4.png",
    enemigo5:"Images/Enemigo5.png",
    enemigo6:"Images/Enemigo6.png",
    enemigo7:"Images/Enemigo7.png",
    personaje:"Images/personaje1.png",
    personaje1:"Images/personaje2.png",
    personaje2:"Images/personaje3.png",
    personaje3:"Images/personaje.png"
   
}

const sonidos={
    boton:"Sonidos/boton.mp3",
    menu:"Sonidos/menu.ogg",
    juego:"Sonidos/shooting-stars.mp3",
    start:"Sonidos/Start.mp3",
    gameover:"Sonidos/game-over.wav"
};


class background{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=canvas.width;
        this.height=canvas.height;
        this.img=new Image();
        this.img.src;
        this.img.onload=()=>{
            this.draw();
        }
        let aleatorio=Math.floor(Math.random()*4)
        switch(aleatorio){
        	case 0:
        		this.img.src=images.background0;
        		break;
        	case 1:
        		this.img.src=images.background1;
        		break;
        	case 2:
        		this.img.src=images.background2;
        		break;
        	case 3:
        		this.img.src=images.background3;
        		break;

        }
        this.audio=new Audio();
        this.audio.src=sonidos.juego;
        this.audio.loop=true;

    }
    draw(){
        this.x--;
        
        if(this.x< -canvas.width)this.x=0
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.drawImage(
            this.img,
            this.x+canvas.width,
            this.y,
            this.width,
            this.height
        );
    }
}

class piso{
    constructor(id,y){
        switch(id){
            case 0:
                this.x=0;
                this.y=550;
                this.width=1200;
                this.height=50;
                this.img=new Image();
                this.img.src=images.piso0;
                this.onload=()=>{
                    this.draw();
                }
                break;
            case 1:
                this.x=1000;
                this.y=y;
                this.width=1000;
                this.height=25;
                this.img=new Image();
                this.img.src=images.piso1;
                this.onload=()=>{
                this.draw();
                }


                break;
            case 2:
                this.x=1000;
                this.y=y;
                this.width=500;
                this.height=25;
                this.img=new Image();
                this.img.src=images.piso2;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 3:
                this.x=1000;
                this.y=y;
                this.width=100;
                this.height=25;
                this.img=new Image();
                this.img.src=images.piso3;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 4:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=25;
                this.img=new Image();
                this.img.src=images.piso4;
                this.onload=()=>{
                this.draw();
                }
                break;
            default:
                console.log("hola");
        }
    }    
    draw(){
        this.x--;
        ctx.drawImage(this.img,
                        this.x,
                        this.y,
                        this.width,
                        this.height);
        }
    restar(){
        this.x=0;
        this.y=550;
    }
    }

class enemigos{
	constructor(id,y){
		switch(id){
            case 1:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.img=new Image();
                this.img.src=images.enemigo1;
                this.sx=0;
                this.sy=0;
                this.id=id;
                this.onload=()=>{
                    this.draw();
                }
                break;
            case 2:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.img=new Image();
                this.img.src=images.enemigo2;
                this.sx=0;
                this.sy=0;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }


                break;
            case 3:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.img=new Image();
                this.img.src=images.enemigo3;
                this.sx=0;
                this.sy=0;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 4:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.img=new Image();
                this.img.src=images.enemigo4;
                this.sx=0;
                this.sy=0;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 5:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.img=new Image();
                this.img.src=images.enemigo5;
                this.sx=0;
                this.sy=0;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 6:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.sx=0;
                this.sy=0;
                this.img=new Image();
                this.img.src=images.enemigo6;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }
                break;
            case 7:
                this.x=1000;
                this.y=y;
                this.width=50;
                this.height=50;
                this.sx=0;
                this.sy=0;
                this.img=new Image();
                this.img.src=images.enemigo7;
                this.id=id;
                this.onload=()=>{
                this.draw();
                }
                break;
            default:
                console.log("hola");
        }
	}
	draw(){
        this.x-=1.5;
        if (this.id<6)
        	ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    	else{
    		if (this.sx>800)this.sx=0;
    		ctx.drawImage(this.img,this.sx,this.sy,50,50,this.x,this.y,this.width,this.height);
    		this.sx+=50;
    	}
    }
}

class Personaje{
    constructor(){
        this.gravedad=0.98;
        this.limitev=0.98;
        this.velocidadSalto=26;
        this.vy=0;
        this.vx=0;
        this.enPiso=false;
        this.x=300;
        this.y=200;
        this.width=50;
        this.height=50;
        this.img=new Image();
        this.img.src;
        this.id;
        this.lives=3;
        this.puntuacion=0;
        this.onload=()=>{
            this.draw();
        }
        let aleatorio=Math.floor(Math.random()*4)
        switch(aleatorio){
        	case 0:
                this.img.src=images.personaje;
                this.id=1;
        		break;
        	case 1:
                this.img.src=images.personaje1;
                this.id=2;
        		break;
        	case 2:
                this.img.src=images.personaje2;
                this.id=3;
        		break;
        	case 3:
                this.img.src=images.personaje3;
                this.id=4;
        		break;

        }

    }
    draw(){
        this.y++
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    isTouchingEnemigo(enemigos){
        return(
            this.x<enemigos.x+enemigos.width && 
            this.x + this.width >enemigos.x &&
            this.y < enemigos.y + enemigos.height &&
            this.y + this.height > enemigos.y
        )    
        
    }
    isTouchingPiso(piso){
        let valid=(this.x+this.width>piso.x && this.x+this.width<piso.x+piso.width ||
        this.x>piso.x && this.x<piso.x+piso.width)&&
        (this.y+this.height>piso.y && this.y+this.height<piso.y+piso.height||
        this.y>piso.y && this.y<piso.y+piso.height)
        if(valid){
                this.enPiso=true;
                this.vy=0;
        }
        return valid
    }
    
    aplicarGravedad(){
        if(!this.enPiso){
            this.vy+=this.gravedad;
            if(this.vy>this.limitev){
                this.vy=this.limitev;
            }
        }
        
    }
    saltar() {
        if(this.enPiso){
            this.vy-=this.velocidadSalto;
            
        }
        this.enPiso=false    
    }
    mover(){
        this.x+=this.vx;
    }
    restar(){
        this.vy=0;
        this.vx=0;
        this.enPiso=false;
        this.x=300;
        this.y=200;
        
        
    }

}



const fondo=new background();
const board=new piso(0);
const per=new Personaje();


function checkCollitionsEnemi(){
    enemigosA.forEach((enemigos,i)=>{
        if(enemigos.x+enemigos.width<=0){
            enemigosA.splice(i,1);
        }
        per.isTouchingEnemigo(enemigos) ? gameOver() : null;
    })
}

function checkCollitionsPiso(){
    if(per.y>=canvas.height)return gameOver();
    if(per.isTouchingPiso(board)){
        per.y=board.y-50;
    }
    pisoA.forEach((piso,i)=>{
        if(pisoA.x+piso.width<=0){
            pisoA.splice(i,1)
        }
        if(per.isTouchingPiso(piso)){
            per.y=piso.y-50;
        }
        
    })
    
}

function gameOver(){

    clearInterval(interval);
    fondo.audio.pause();
    let audioOver=new Audio();
    audioOver.src=sonidos.gameover;
    audioOver.loop=false;
    audioOver.play();
    if(!Twoplayer){
        per.puntuacion+=puntuacion;
    if(per.lives>1){
        let texto="PERDISTE 1 VIDA";

        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(195,270,310,98);    

        ctx.strokeStyle="#FFCFDA";
        ctx.fillStyle="#FF4C77"; 
        ctx.font="bold 30px Courier New"; 
        ctx.strokeText(texto,200,300);
        ctx.fillText(texto,200,300);
        texto="Preciona R para continuar";
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,350);
        ctx.fillText(texto,200,350);
        gameover=true;
    }
    else{
        let texto="Fin del Juego";

        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(195,270,420,138);

        ctx.strokeStyle="#FFCFDA";
        ctx.fillStyle="#FF4C77"; 
        ctx.font="bold 30px Courier New"; 
        ctx.strokeText(texto,200,300);
        ctx.fillText(texto,200,300);
        texto="Tu Puntuación final fue: "+per.puntuacion;
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,350);
        ctx.fillText(texto,200,350);
        texto="Presiona ESC para regresar al menu";
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,400);
        ctx.fillText(texto,200,400);
        rMenu=true;
    } 
}
else{
    if(per.lives>1 && per.lives%2==0){
        puntP1+=puntuacion;

        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(195,270,460,98);

        let texto="PERDISTE 1 VIDA JUGADOR 1";
        ctx.strokeStyle="#FFCFDA";
        ctx.fillStyle="#FF4C77"; 
        ctx.font="bold 30px Courier New"; 
        ctx.strokeText(texto,200,300);
        ctx.fillText(texto,200,300);
        texto="Presiona R para continuar Jugador 2";
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,350);
        ctx.fillText(texto,200,350);
        gameover=true;
    }else if(per.lives>1 && per.lives%2!=0){
        puntP2+=puntuacion;

        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(195,270,460,98);

        let texto="PERDISTE 1 VIDA JUGADOR 2";
        ctx.strokeStyle="#FFCFDA";
        ctx.fillStyle="#FF4C77"; 
        ctx.font="bold 30px Courier New"; 
        ctx.strokeText(texto,200,300);
        ctx.fillText(texto,200,300);
        texto="Presiona R para continuar Jugador1";
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,350);
        ctx.fillText(texto,200,350);
        gameover=true;
    }else{

        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(195,270,475,240);

        let texto="Fin del Juego";
        ctx.strokeStyle="#FFCFDA";
        ctx.fillStyle="#FF4C77"; 
        ctx.font="bold 30px Courier New"; 
        ctx.strokeText(texto,200,300);
        ctx.fillText(texto,200,300);
        texto="Tu Puntuación final Jugador 1 fue: "+puntP1;
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,350);
        ctx.fillText(texto,200,350);
        texto="Tu Puntuación final jugador 2 fue: "+puntP2;
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,400);
        ctx.fillText(texto,200,400);
        if(puntP1>puntP2){
            texto="GANASTE JUGADOR 1";
            ctx.strokeStyle="white";
            ctx.fillStyle="black"; 
            ctx.font="bold 20px Courier New"; 
            ctx.strokeText(texto,200,450);
            ctx.fillText(texto,200,450);    
        }else{
            texto="GANASTE JUGADOR 2";
            ctx.strokeStyle="white";
            ctx.fillStyle="black"; 
            ctx.font="bold 20px Courier New"; 
            ctx.strokeText(texto,200,450);
            ctx.fillText(texto,200,450);
        }
        texto="Presiona ESC para regresar al menu";
        ctx.strokeStyle="white";
        ctx.fillStyle="black"; 
        ctx.font="bold 20px Courier New"; 
        ctx.strokeText(texto,200,500);
        ctx.fillText(texto,200,500);
        rMenu=true;
        
    } 
}
    

}
function generarPiso(){
    if(frames %380===0){
        const pos=Math.floor(Math.random()*(300))+250;
        const ran=Math.floor(Math.random()*(4))+1;
        pisoA.push(new piso(ran,pos));
    }
}

function drawPiso(){
    pisoA.forEach(piso=>piso.draw())
}

function generarEnemigo(){
    if(frames %300===0){
        const pos=Math.floor(Math.random()*(300))+250;
        const ran=Math.floor(Math.random()*(7))+1;
        enemigosA.push(new enemigos(ran,pos));
    }
}

function drawEnemigo(){
    enemigosA.forEach(enemigos=>enemigos.draw())
}

function drawScore(){
    if(frames%100===0){
        puntuacion+=20;
    }
    let texto="Puntuación:" + puntuacion
    ctx.strokeStyle="#FFCFDA";
    ctx.fillStyle="#FF4C77"; 
    ctx.font="bold 30px Courier New"; 
    ctx.strokeText(texto,0,30);
    ctx.fillText(texto,0,30) 
  }
  function drawBarra(){
    ctx.fillStyle="#333333"
    ctx.fillRect(0,0,canvas.width,42);
  }
  function drawLives(lives){
    let live1=new Image();
    let live2=new Image();
    live1.src=per.img.src;
    live2.src=srcJugador2;
    let margin=950;
    if(!Twoplayer){
        for(let i=0;i<lives;i++){
            ctx.drawImage(live1,margin,10,30,30);
            margin-=70;
        }   
    }
    else{
        for(let i=0;i<lives/2;i++){
            if(lives%2==0){
                ctx.drawImage(live1,margin,10,30,30);
                margin-=70;
                per.img.src=srcJugador1;
                
                }
            else{
                ctx.drawImage(live2,margin,10,30,30);
                margin-=70;
                per.img.src=srcJugador2;
            }
        }
    }    
  }

  function restarGame(){
      
      if(gameover){
            frames=0;
            gameover=false;
            score=0;
            puntuacion=0;
            per.lives--;
            pisoA=[];
            enemigosA=[];
            per.restar();
            board.restar();
            startGame();
      }
  }

function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fondo.draw();
    board.draw();
    generarPiso();
    drawPiso();
    generarEnemigo();
    drawEnemigo();
    per.draw();
    drawBarra();
    drawScore();
    drawLives(per.lives);
    
    per.y+=per.vy;
    per.aplicarGravedad();
    per.mover();
    checkCollitionsEnemi();
    checkCollitionsPiso();
    
    
}
function aleatorioDis(){
    srcJugador1=per.img.src;
    let aleatorio=Math.floor(Math.random()*4);
    while(aleatorio==per.id){
        aleatorio=Math.floor(Math.random()*4);
    }
    switch(aleatorio){
        case 0:
            srcJugador2=images.personaje;
        	break;
        case 1:
            srcJugador2=images.personaje1;
        	break;
        case 2:
            srcJugador2=images.personaje2;
        	break;
        case 3:
            srcJugador2=images.personaje3;
        break;
    }

}


function startGame() {
    fondo.audio.play();
    interval = setInterval(update, 1000 / 220);
    
  }
  window.onload=function(){
      document.getElementById("boton1").onclick=function(){
            canvas.webkitRequestFullScreen()
            startGame();
            let menuI= document.getElementById("Menu");
            menuI.style.display="none"
            Twoplayer=false;
            per.lives=3;
      }
      document.getElementById("boton1").onmouseover=function(){
        let audioOver=new Audio();
        audioOver.src=sonidos.boton;
        audioOver.loop=false;
        audioOver.play();
        }
      document.getElementById("boton2").onclick=function(){
        canvas.webkitRequestFullScreen()
        startGame();
        let menuI= document.getElementById("Menu");
        menuI.style.display="none"
        per.lives=6;
        puntP2=0;
        puntP1=0;
        aleatorioDis();
        Twoplayer=true;
      }
      document.getElementById("boton2").onmouseover=function(){
        let audioOver=new Audio();
        audioOver.src=sonidos.boton;
        audioOver.loop=false;
        audioOver.play();
        
        }
  }
  
  //startGame();
 function regresarBoton(){
     rMenu=false;
     ctx.clearRect(0,0,canvas.width,canvas.height);
     let aleatorio=Math.floor(Math.random()*4)
        switch(aleatorio){
        	case 0:
        		fondo.img.src=images.background0;
        		break;
        	case 1:
        		fondo.img.src=images.background1;
        		break;
        	case 2:
        		fondo.img.src=images.background2;
        		break;
        	case 3:
        		fondo.img.src=images.background3;
        		break;

    }
    aleatorio=Math.floor(Math.random()*4)
        switch(aleatorio){
        	case 0:
        		per.img.src=images.personaje;
        		break;
        	case 1:
        		per.img.src=images.personaje1;
        		break;
        	case 2:
        		per.img.src=images.personaje2;
        		break;
        	case 3:
        		per.img.src=images.personaje3;
        		break;

        }
     fondo.draw();
     frames=0;
     gameover=false;
     puntuacion=0;
     pisoA=[];
     enemigosA=[];
     rMenu=false;
     per.lives=3;
     per.puntuacion=0;
     board.restar();
     per.restar();
     let menuI= document.getElementById("Menu");
     menuI.style.display="flex";
   }

  document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
      case 38:
        per.saltar();
        break;
      case 39:
        per.vx=per.limitev;
        break;
      case 37:
        per.vx=-per.limitev;
        break;
      case 82:
        restarGame();
        break;
      case 27:
        if(rMenu){
        canvas.webkitRequestFullScreen()
        regresarBoton();
        }  
    }
  })