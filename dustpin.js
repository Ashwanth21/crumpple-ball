class Dustpin {
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.width = width
        this.height=height
        this.dustpin = Bodies.rectangle(x,y,width,height,option);
         World.add(world,this.dustpin);
         
          
     }
    display(){
     var pos =this.dustpin.position
     push();
     translate(pos.x,pos.y)
     rectMode (CENTER);
     rect(0,0,this.width,this.height)
     pop ();
    } 
};