class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	set x(_x){
		this._x = _x;
	}

	get x(){
		return this._x;
	}

	set y(_y){
		this._y = _y;
	}

	get y(){
		return this._y;
	}

	toString(){
		return `Point: ${this.x}, ${this.y}`;
	}
}

export default Point;
