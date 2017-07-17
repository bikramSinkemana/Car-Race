function Slider() {
	this.element;
	this.width=50;
	this.height=6000;
	var that=this;
	this.intervalId;
	this.marginTop=-this.height;
	this.color='green';
	this.score=0;

	this.create=function () {
		this.element=document.createElement('div');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.style.position='absolute';
		this.element.style.zIndex=5;
		this.element.style.backgroundImage='url(https://0.s3.envato.com/files/171528471/thumbs/2.jpg)';

		this.element.style.background=this.color;
		 this.element.style.background='url("images/background.png")';
		//this.element.innerHTML="dasdfl lalfjasl kjlajsdflkj dihkda llkskhasdf ";
		
		// body...
	}
	this.append=function(element){
		this.element.appendChild(element);
	}
	this.slide=function(){
		that.intervalId=setInterval(function(){
			that.marginTop=
			that.element.style.marginTop=that.marginTop;

			that.marginTop+=1;
			that.score+=.05;
			var scoreBoard = document.getElementById('score');
			 scoreBoard.innerHTML = Math.floor(that.score);
			console.log();
		},1000/60);

	}
	this.showScore=function(){
		console.log(that.score);
	}
	this.stop=function(){
		clearInterval(that.intervalId);
	}
	// body...
}