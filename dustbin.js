class dustbin {

constructor(x,y){

this.x = x;
this.y = y;
this.dustbinwidth = 200;
this.dustbinheight = 213;
this.wallthickness = 20;
this.image = loadImage("dustbin.png");
this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic : true});
this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic : true});
this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic : true});
Worldc.add(world,this.bottombody);
Worldc.add(world,this.leftwallbody);
Worldc.add(world,this.rightwallbody);
    
}

display(){

    var pos = this.bottombody.position;
    var pos2 = this.leftwallbody.position;
    var pos3 = this.rightwallbody.position;

    rectMode(CENTER);
    fill ("red");
    stroke ("red");
    rect(pos.x,pos.y,this.dustbinwidth,this.wallthickness);
    rect(pos2.x,pos2.y,this.wallthickness,this.dustbinheight);
    rect(pos3.x,pos3.y,this.wallthickness,this.dustbinheight);
    imageMode(CENTER);
    image(this.image,600 ,510, 200, 200);

}

}