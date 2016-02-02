var Actor = function(x, y) {
	this.x = x;
	this.y = y;
	this.mass = 0;
	this.killRadius = 0;
}
Actor.G = 10;

Actor.prototype.attract = function(projectile) {
	if(this.mass = 0)
		return;
	
	var r2 = 
		Math.pow(this.x - projectile.currentP.x, 2) 
		+ Math.pow(this.y - projectile.currentP.y);
	
	if(r2 <= 1)
		projectile.kill();
	
	var Fg = (Actor.G * this.mass * projectile.mass) / r2;
	var Fx = (Fg * projectile.currentP.x) / Fg;
	var Fy = (Fg * projectile.currentP.y) / Fg;
	
	projectile.currentV.x -= Fx /  projectile.mass;
	projectile.currentV.y -= Fy /  projectile.mass;
	
}

Actor.prototype.fire = function(projectile) {
	if(this.killRadius = 0)
		return;
	
	var r = Math.sqrt(
		Math.pow(this.x - projectile.currentP.x, 2) 
		+ Math.pow(this.y - projectile.currentP.y)
		);
	
	if(r < this.killRadius)
		projectile.kill();
}

var BlackHole = function(x, y, mass) {
	Actor.apply(this, [x, y]);
	this.mass = mass;
}

var Ship = function(x, y, killRadius) {
	Actor.apply(this, [x, y]);
	this.killRadius = killRadius;
}


