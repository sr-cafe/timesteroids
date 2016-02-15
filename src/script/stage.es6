import Point from "./point.es6";
import Minivents from "minivents";

class Stage{
	static get RESIZE(){ return 'onStageResize';}

	constructor(_canvas){
		Minivents(this);

		this.canvas = _canvas;
		this.context = this.canvas.getContext('2d');
		this.updateSizeHandler = this.updateSize.bind(this);
		window.addEventListener('resize', this.updateSizeHandler);

		this.updateSize();
	}

	set canvas(_canvas){
		this._canvas = _canvas;
	}

	get canvas(){
		return this._canvas;
	}

	set context(_context){
		this._context = _context;
	}

	get context(){
		return this._context;
	}

	get radius(){
		return this._radius;
	}

	get center(){
		return this._center;
	}

	updateSize(){
		var w = document.documentElement.clientWidth,
			h = document.documentElement.clientHeight;

		this.canvas.width = w;
		this.canvas.height = h;

		this._radius = Math.min(w / 2, h / 2) - 100;
		this._center = new Point(w / 2, h / 2);

		this.emit(Stage.RESIZE, {
			w: w,
			h: h
		})
	}
}

export default Stage;
