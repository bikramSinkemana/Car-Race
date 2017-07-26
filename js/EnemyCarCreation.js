function EnemyCarCreation(cars,container) {
	this.cars=cars;
	this.container=container;
	var that=this;
	this.intervarId;

	this.create=function(){
		that.intervarId=setInterval(function(){
		var randomNumbers=[];
		randomNumbers=twoRandomNumber(0,3);
		var car2=new Car((randomNumbers[0]*100)+75*(randomNumbers[0]+1),-100);
		car2.color='black';
		car2.create();
		that.container.append(car2.element);
		var car3=new Car((randomNumbers[1]*100)+75*(randomNumbers[1]+1),-100);
		car3.color='black';
		car3.create();
		that.container.append(car3.element);
		that.cars.push(car2);
		that.cars.push(car3);

		},1500);

	}
	this.stop=function(){
		clearInterval(that.intervarId);
	}
	// body...
}