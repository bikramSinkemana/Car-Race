function CarMovement(cars,container,gameOver,enemyCarCreation,slider) {
	
	var that=this;

	this.container=container;
	this.cars=cars;
	this.gameOver=gameOver;
	this.intervalId;
	this.intervalId1;
	this.enemyCarCreation=enemyCarCreation;
	this.slider=slider;
	this.flag=false;


	this.carMove=function(){
		that.intervalId=setInterval(function(){


			

			 document.addEventListener('keydown',checkKeyPress,false);
			

		},1000/60);
	}
	this.enemyCarMove=function(){
		that.intervalId1=setInterval(function(){
			for (var i = 1; i < cars.length; i++) {
				that.cars[i].enemyMove();
				if (cars[i].y>=900) {
					
					// console.log(that.container);
					var test = false;
					test = cars[i].removeEnemyCar(that.container);
					// that.container.removeChild(cars[i].element);
					if(test){
						var index = cars.indexOf(cars[i]);
						// console.log(index);
						cars.splice(index,1);
						// console.log(cars);
					}
					// cars.pop(cars[i]);
				}


			}
			// cars[1].enemyMove();
			// cars[2].enemyMove();
		},1);
	}

	this.wallCollisionCheck=function(){
		that.intervalId=setInterval(function(){
			debugger;
			console.log(that.cars[0].x);
			if(that.cars[0].x<=0||(that.cars[0].x + that.cars[0].width) >= container.width){
				
				that.stop();
				that.flag=true;
				
				gameOver.showGameOver();
				
				
			}
		},1000/60);
	}
	this.carCollisionCheck=function(){
		that.intervalId=setInterval(function(){

		  for (var i = 0; i < that.cars.length; i++) {
            for (var j = i; j < that.cars.length; j++) {
            
         
             if (cars[i] !=cars[j]) { 
                            
                         
                if (cars[i].x<cars[j].x+cars[j].width &&
                  cars[i].x+cars[i].width>cars[j].x &&
                  cars[i].y< cars[j].y+cars[j].height &&
                  cars[i].height + cars[i].y > cars[j].y) {
                  		cars[0].element.style.background='url("images/hero-image-destroyed.png")';
                  		that.stop();
                  	that.flag=true;


                		gameOver.showGameOver();
                		
                	
                }
                  
             }
            } 
          }

		})
	}
	this.stop=function(){
		that.enemyCarCreation.stop();
		that.slider.stop();
		clearInterval(that.intervalId1);
		clearInterval(that.intervalId);
		

		
	}
	


	 

		function checkKeyPress(key){
			if (that.flag==false) {
			if(key.keyCode=="37"){
				
				var value= -175;
				cars[0].move(value);
			}else if(key.keyCode=="39"){
				var value2= 175;
				cars[0].move(value2);
			}
		}
	}

	// body...
}