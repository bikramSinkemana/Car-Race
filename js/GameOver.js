function GameOver() {
	this.height=600;
	this.width=500;
	this.color='grey';
	this.element;

	this.create=function(){
		this.element=document.createElement('div');
		this.element.style.height=this.height;
		this.element.style.width=this.width;
		this.element.style.background=this.color;
		this.element.style.position='absolute';
		this.element.style.zIndex=1;
	


	}
	this.append=function(element){
		this.element.appendChild(element);
	}
	this.showGameOver=function(){
		//this.element.style.zIndex=15;
	}
	// body...
}