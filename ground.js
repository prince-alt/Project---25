class ground {

constructor(){

var groundp = {

isStatic : true,

}

this.body = Bodies.rectangle(400,650,1800,40,groundp);
this.width = 1800;
this.height = 40;
Worldc.add(world,this.body);

}

display(){

var pos = this.body.position;

rectMode(CENTER);
fill("pink");
rect(pos.x,pos.y,this.width,this.height);


}


}