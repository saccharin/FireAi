var Actor = function(x, y) {
	this.x = x;
	this.y = y;
	this.mass = 0;
	this.killRadius = 0;
}
Actor.G = 100;

Actor.prototype.attract = function(projectile) {

	if(this.mass == 0)
		return;
	
	var dx = (this.x - projectile.currentP.x) / 5;
	var dy = (this.y - projectile.currentP.y) / 5;
	
	var r2 = 
		Math.pow(dx, 2) 
		+ Math.pow(dy, 2);
	var r = Math.sqrt(r2);
	
	var cx = (dx < 0) ? -1 : 1;
	var cy = (dy < 0) ? -1 : 1;
	
	if(r2 <= 1)
		projectile.kill();
	
	var Fg = (Actor.G * this.mass * projectile.mass) / r2;
	var Fx = Fg * dx / r;
	var Fy = Fg * dy / r;
	
	projectile.currentV.x += (Fx / projectile.mass);
	projectile.currentV.y += (Fy / projectile.mass);
	
}

Actor.prototype.fire = function(projectile) {
	if(this.killRadius == 0)
		return;
	
	var r = Math.sqrt(
		Math.pow(this.x - projectile.currentP.x, 2) 
		+ Math.pow(this.y - projectile.currentP.y, 2)
		);
	
	if(r < this.killRadius)
		projectile.kill();
}

var Blackhole = function(x, y, mass) {
	Actor.apply(this, [x, y]);
	this.mass = mass;
	this.killRadius = mass;
}
Blackhole.prototype = new Actor();

var Ship = function(x, y, killRadius) {
	Actor.apply(this, [x, y]);
	this.killRadius = killRadius;
}
Ship.prototype = new Actor();


