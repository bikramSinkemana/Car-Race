function GameOver() {
	this.height=600;
	this.width=600;
	this.color='grey';
	this.element;
	var that=this;
	this.restart=3;

	this.create=function(){
		this.element=document.createElement('div');
		this.element.style.height=this.height;
		this.element.style.width=this.width;
		this.element.style.background='url("images/GameOver.png")';;
		this.element.style.position='absolute';
		this.element.style.zIndex=1;
	


	}
	this.append=function(element){
		this.element.appendChild(element);
	}
	this.showGameOver=function(){
		this.element.style.zIndex=15;
		document.addEventListener('keydown',checkKeyPressRestart,false);

	}
	function checkKeyPressRestart(key){
		debugger;
			
			if(key.keyCode=="13"){
				
				that.restart=1;
			}
		}
	
	// body...
}