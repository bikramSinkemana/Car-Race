var twoRandomNumber=function(min,max){
	 var firstRandom=Math.floor(Math.random() * (max - min) + min);
	 var secondRandom=Math.floor(Math.random() * (max - min) + min);
	 while(firstRandom==secondRandom){
	 	var secondRandom=Math.floor(Math.random() * (max - min) + min);
	 };
	 var twoRandom=[];
	 twoRandom.push(firstRandom);
	 twoRandom.push(secondRandom);
	 return twoRandom; 

}
var randomNumber=function(min,max){
	 return Math.floor(Math.random() * (max - min) + min);

}