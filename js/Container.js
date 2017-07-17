function Container() {
	this.element;
	this.height=1000 ;
	this.width=600 ;
	
	this.overflow='hidden';
	this.color='blue';


	this.create=function () {
		this.element=document.createElement('div');
		this.element.style.position='relative';
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.style.overflow=this.overflow;
		this.element.style.background=this.color;
		debugger;
		// body...
	}
	this.append=function (element) {
		this.element.appendChild(element);
	}
	this.createScoreBoard=function(){
		this.element=document.createElement('div');
		this.element.style.position='absolute';
		this.element.style.width=this.width;
		this.element.style.height=50;
		this.element.style.background='pink';

	}

	// body...
}