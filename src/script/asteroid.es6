import Drawable from "./drawable.es6";
import Point from "./point.es6";

class Asteroid extends Drawable {
	static calculatePoint(center, angle, radius) {
		var rad = ((angle - 90) * Math.PI) / 180;
		return new Point(
			center.x + radius * Math.cos(rad),
			center.y + radius * Math.sin(rad)
		);
	}

	constructor(angle, center, radius, size) {
		super(angle, center, radius, size);
		this.center = Asteroid.calculatePoint(this.center, this.angle, this.radius);
		this.updateRectangle();
	}

	updateVertices() {
		let center = Asteroid.calculatePoint(this.center, this.angle, this.radius);

		// let canvas = document.querySelector('canvas');
		// let context = canvas.getContext('2d');
		// context.beginPath();
		// context.strokeStyle = '#ffffff';
		// context.moveTo(this.center.x, this.center.y);
		// context.lineTo(center.x, center.y);
		// context.stroke();
		// console.log(this.center)
		// console.log(center)
		// x=centerX+radius*Math.sin(i*2*Math.PI/segments);
		// y=centerY+radius*Math.cos(i*2*Math.PI/segments);


		// var center = new Point(
		// 	this.center.x + this.radius * Math.cos(2 * Math.PI * this.angle),
		//     this.center.y + this.radius * Math.sin(2 * Math.PI * this.angle)
		// )
		center = new Point(0, 0);

		this.points = [0, 90, 180, 270].map((angle) => {
			// return Asteroid.calculatePoint(center, angle, this.size);
			return Asteroid.calculatePoint(center, angle, this.size);
		});

		this.updateRectangle();
	}
}

export default Asteroid;
