class Rectangle{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
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

	set w(_w){
		this._w = _w;
	}

	get w(){
		return this._w;
	}

	set h(_h){
		this._h = _h;
	}

	get h(){
		return this._h;
	}
}

export default Rectangle;
