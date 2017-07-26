 function Car(x, y){

	this.x = x ;
    this.y = y ;
	this.height=210;
	this.width=100;
	this.color='red';
  
	this.element;

	this.create=function(){
   
		this.element=document.createElement('div');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.style.position='absolute';
		this.element.style.background=this.color;
  
		this.element.style.zIndex=10;
     if (this.color=='red') {
      this.element.style.className='hero';
        this.element.style.background='url("images/hero-image.png")';
    }else{
      this.element.style.className='villain';
       this.element.style.background='url("images/villain-image.png")';
    }

		this.setPosition(this.x,this.y);
	}


	this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  this.move=function(x){
  	
  	this.x+=x;
  	this.element.style.left=this.x;
  	
  }
  this.enemyMove=function(){
  	this.y+=2;
  	this.element.style.top=this.y;
  }
  this.removeEnemyCar = function(parent){
    parent.element.removeChild(this.element);
    
    return true;
  }

}