import Rectangle from './rectangle.es6';

class Drawable{
	constructor(angle, center, radius, size){
		this.angle = angle;
		this.center = center;
		this.radius = radius;
		this.size = size;

		this.rotation = Math.round(Math.random() * 360);

		this.updateVertices();
	}

	set rectangle(_rectangle){
		this._rectangle = _rectangle;
	}

	get rectangle(){
		return this._rectangle;
	}

	clear(context){
		// context.beginPath();
		// context.strokeStyle = '#ffffff';
		// context.moveTo(this.rectangle.x, this.rectangle.y);
		// context.lineTo(this.rectangle.w, this.rectangle.y);
		// context.lineTo(this.rectangle.w, this.rectangle.h);
		// context.lineTo(this.rectangle.x, this.rectangle.h);
		// context.lineTo(this.rectangle.x, this.rectangle.y);
		// context.stroke();
		context.clearRect(
			this.rectangle.x,
			this.rectangle.y,
			this.rectangle.w,
			this.rectangle.h
		);
	}

	updateRectangle(){
		console.log(this.center);
		console.log(this.points);
		let x = this.points.map(function(point){
			return point.x;
		}),
		y = this.points.map(function(point){
			return point.y;
		});

		this.rectangle = new Rectangle(
			this.center.x + x.reduce(function(prev, next){
				return Math.min(prev, next)
			}, Infinity),
			this.center.y + y.reduce(function(prev, next){
				return Math.min(prev, next)
			}, Infinity),
			this.center.x + x.reduce(function(prev, next){
				return Math.max(prev, next)
			}, 0),
			this.center.y + y.reduce(function(prev, next){
				return Math.max(prev, next)
			}, 0)
		);
		console.log(this.rectangle);
	}

	draw(context){
		this.clear(context);
		context.save();
		context.translate(this.center.x, this.center.y);
		context.rotate(this.rotation);
		context.beginPath();
		context.strokeStyle = '#ffffff';
		var points = this.points.slice(0),
			point = points.shift();

		context.moveTo(point.x, point.y);

		points.forEach(function(point){
			context.lineTo(point.x, point.y)
		})

		context.lineTo(point.x, point.y);
		context.stroke();
		context.restore();
		this.rotation++;
	}
}

export default Drawable;
