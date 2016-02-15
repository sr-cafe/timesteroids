import Stage from "./stage.es6";
import Asteroid from "./asteroid.es6";

class App{
	constructor(){
		this.stageResizeHandler = this.handleStageResize.bind(this);
		this.animationFrameHandler = this.handleAnimationFrame.bind(this);

		let canvas = document.querySelector('canvas');
		this.stage = new Stage(canvas);

		this.stage.on(Stage.RESIZE, this.stageResizeHandler);


		this.createElements();
		window.requestAnimationFrame(this.animationFrameHandler);
	}

	createElements(){
		this.elements = [];
		let center = this.stage.center,
			radius = this.stage.radius,
			circumference = 2 * Math.PI * radius,
			elementSize;

		// Hours
		elementSize = (circumference / 12) / 2;
		for(let i = 0; i < 1; i++){
			// angle, center, radius, size
			this.elements.push(
				new Asteroid(30 * i, center, radius, elementSize)
			);
		}
/*
		// Minutes
		radius -= 50;
		circumference = 2 * Math.PI * radius;
		elementSize = (circumference / 60) / 2
		for(let i = 0; i < 60; i++){
			// angle, center, radius, size
			this.elements.push(
				new Asteroid(6 * i, center, radius, elementSize)
			);
		}

		// Seconds
		radius -= 50;
		circumference = 2 * Math.PI * radius;
		elementSize = (circumference / 60) / 2
		for(let i = 0; i < 60; i++){
			// angle, center, radius, size
			this.elements.push(
				new Asteroid(6 * i, center, radius, elementSize)
			);
		}
*/
	}

	handleAnimationFrame(){
		var context = this.stage.context;
		this.elements.forEach((element)=>{
			element.draw(context);
		});
		// window.requestAnimationFrame(this.animationFrameHandler);
	}

	handleStageResize(data){
		
	}
}

window.APP = new App();
