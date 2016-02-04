var Projectile = function(initialP, initialV) {
	this.currentP = JSON.parse(JSON.stringify(initialP));
	this.initialV = JSON.parse(JSON.stringify(initialV));
	
	this.currentV = JSON.parse(JSON.stringify(initialV));
	
	
	this.mass = 10;
	this.iteration = 0;
	
	this.isAlive = true;
}

Projectile.prototype.getNextV = function(actors) {
	var p = this;
	
	actors.forEach(function(a) {
		a.attract(p);
		a.fire(p);
	});
	
	if(!this.isAlive)
		return;
	
	this.currentP.x += this.currentV.x;
	this.currentP.y += this.currentV.y;
	
	this.onMove(this);
}

Projectile.prototype.kill = function() {
	this.isAlive = false;
	this.onDie(this);
}

Projectile.prototype.onMove = function() {}
Projectile.prototype.onDie = function() {}