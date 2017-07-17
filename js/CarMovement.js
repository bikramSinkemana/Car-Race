function CarMovement(cars,container,gameOver,enemyCarCreation,slider) {
	var that=this;
	this.container=container;
	this.cars=cars;
	this.gameOver=gameOver;
	this.intervalId;
	this.intervalId1;
	this.enemyCarCreation=enemyCarCreation;
	this.slider=slider;



	this.carMove=function(){
		that.intervalId=setInterval(function(){

			 window.addEventListener('keydown',checkKeyPress,false);

		},1000/60);
	}
	this.enemyCarMove=function(){
		that.intervalId1=setInterval(function(){
			for (var i = 1; i < cars.length; i++) {
				that.cars[i].enemyMove();
			}
			// cars[1].enemyMove();
			// cars[2].enemyMove();
		},1000/60);
	}

	this.wallCollisionCheck=function(){
		that.intervalId=setInterval(function(){
			if(cars[0].x<=0||(cars[0].x + cars[0].width) >= container.width){
				that.stop();
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
                  		that.stop();

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
			
			if(key.keyCode=="37"){
				
				var value= -15;
				cars[0].move(value);
			}else if(key.keyCode=="39"){
				var value2= 15;
				cars[0].move(value2);
			}
		}
	// body...
}