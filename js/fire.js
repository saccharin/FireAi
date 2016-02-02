var Fire = function(position, target) {
	this.position = position;
	this.target = target;
	
	this.v = {};
}

Fire.prototype.fire = function(vx, vy) {
	this.v = { x: vx, y: vy };
}
