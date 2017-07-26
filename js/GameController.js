function GameController(elementId) {
	var element=document.getElementById(elementId);
	var restart;

	var container;
	var that=this;

	this.init=function(){
		container= new Container();
		container.create();
		var cars=[];
		element.appendChild(container.element);
		var slider=new Slider();
		slider.create();
		container.append(slider.element);
		slider.slide();
		slider.showScore();
		//slider.stop();
		var car=new Car(250,790);
		car.create();
		container.append(car.element);
			cars.push(car);


		var car2=new Car(75,0);
		car2.color='black';
		car2.create();
		container.append(car2.element);
		var car3=new Car(425,0);
		car3.color='black';
		car3.create();
		container.append(car3.element);
	
		cars.push(car2);
		cars.push(car3);
		slider.showScore();

		var enemyCarCreation=new EnemyCarCreation(cars,container);
		enemyCarCreation.create();

		var gameOver=new GameOver();
		gameOver.create();
		container.append(gameOver.element);

		var carMovement= new CarMovement(cars,container,gameOver,enemyCarCreation,slider);
		// var options = {
		// 	cars: cars,
		// 	container: container,
		// }
		// var carMovement= new CarMovement(options);
		carMovement.carMove();
		carMovement.enemyCarMove();
		carMovement.wallCollisionCheck();
		carMovement.carCollisionCheck();
		this.intervalId=setInterval(function(){
		if(gameOver.restart==1){
			debugger;
			that.del(cars,container,gameOver);
			
			that.stop();
		}
	},1000/60);

	}
	this.stop=function(){
		clearInterval(that.intervalId);
		that.init();
	}
	this.del=function(cars,container,gameOver){
		console.log(container);
		debugger;
		//container.element.removeChild(slider.element);

		
	//	element.removeChild(score.element);
		for (var i = 0; i < cars.length; i++) {
			//element.removeChile(cars[i].element);
			var test = false;
					test = cars[i].removeObstacle(container);
					// that.container.removeChild(cars[i].element);
					if(test){
						var index = cars.indexOf(cars[i]);
						// console.log(index);
						cars.splice(index,1);
					}
		}
		element.removeChild(container.element);
		cars=[];
		gameOver.restart=0;

	}

	
	
}
var gameController=new GameController('car-racing');
gameController.init();