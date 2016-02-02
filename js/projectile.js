var Projectile = function(initialP, initialV) {
	this.currentP = initialP;
	this.initialV = initialV;
	
	this.currentV = JSON.parse(JSON.stringify(initialV));
	
	
	this.mass = 1;
	this.iteration = 0;
	
	this.isAlive = true;
}

Projectile.prototype.getNextV = function(actors) {
	var x = this.currentV.x;
	var y = this.currentV.y;
	
	actors.forEach(function(a) {
		a.attract(this);
		a.fire(this);
	});
	
	if(!this.isAlive)
		return;
	
	
}

Projectile.prototype.kill = function() {
	this.isAlive = false;
}
