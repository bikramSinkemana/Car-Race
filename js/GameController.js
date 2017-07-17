function GameController(elementId) {
	var element=document.getElementById(elementId);

	this.init=function(){
		var container= new Container();
		container.create();
		var cars=[];
		element.appendChild(container.element);
		var slider=new Slider();
		slider.create();
		container.append(slider.element);
		slider.slide();
		slider.showScore();
		//slider.stop();
		var car=new Car(20,285);
		car.create();
		container.append(car.element);
			cars.push(car);


		// var car2=new Car(5,0);
		// car2.color='black';
		// car2.create();
		// container.append(car2.element);
		// var car3=new Car(35,0);
		// car3.color='black';
		// car3.create();
		// container.append(car3.element);
	
		// cars.push(car2);
		// cars.push(car3);
		slider.showScore();

		var enemyCarCreation=new EnemyCarCreation(cars,container);
		enemyCarCreation.create();

		var gameOver=new GameOver();
		gameOver.create();
		container.append(gameOver.element);

		var carMovement= new CarMovement(cars,container,gameOver,enemyCarCreation,slider);
		carMovement.carMove();
		carMovement.enemyCarMove();
		carMovement.wallCollisionCheck();
		carMovement.carCollisionCheck();



	}

	
	
}
var gameController=new GameController('car-racing');
gameController.init();