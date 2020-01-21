const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
let interval;
let frames=0;
let gameover=false;
let score=0;
let pisoA=[];
let enemigosA=[];

const images={
    background:"./Images/background.png",
    piso0:"./Images/piso0.png",
    piso1:"./Images/piso1.png",
    piso2:"./Images/piso2.png",
    piso3:"./Images/piso3.png",
    piso4:"./Images/piso4.png",
    enemigo1:"./Images/Enemigo1.png",
    enemigo2:"./Images/Enemigo2.png",
    enemigo3:"./Images/Enemigo3.png",
    enemigo4:"./Images/Enemigo4.png",
    enemigo5:"./Images/Enemigo5.png",
    enemigo6:"./Images/Enemigo6.png",
    enemigo7:"./Images/Enemigo7.png",
    personaje:"./Images/personaje.png"
};

class background{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=canvas.width;
        this.height=canvas.height;
        this.img=new Image();
        this.img.src=images.background;
        this.img.onload=()=>{
            this.draw();
        }
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
        this.x=300;
        this.y=500;
        this.width=50;
        this.height=50;
        this.img=new Image();
        this.img.src=images.personaje;
        this.onload=()=>{
            this.draw();
        }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}

const fondo=new background();
const board=new piso(0);
const per=new Personaje();

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
}

function startGame() {
    interval = setInterval(update, 1000 / 220);
  }

  startGame();