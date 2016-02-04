var Fire = function(position, target) {
	this.position = position;
	this.target = target;
	
	this.v = {};
}
Fire.prototype.loadProjectile = function(vx, vy) {
	this.v = { x: vx, y: vy };
	var projectile = new Projectile(this.position, { x: vx, y: vy });
	
	return projectile;
}
Fire.prototype.fire = function(projectile, actors) {
	var iterations = 0;
	var positions = [];
	
	var iterations = 0;
	var self = this;
	
	var interval = setInterval(function() {
		projectile.getNextV(actors);
		positions.push(JSON.parse(JSON.stringify(projectile.currentP)));
		
		var d = Math.sqrt(
			Math.pow(projectile.currentP.x - self.target.x, 2) + 
			Math.pow(projectile.currentP.y - self.target.y, 2));
		
		if(d < 50) {
			clearInterval(interval);
			self.onHitTarget(self, projectile);
		}
		
		if(iterations++ > 200)
			clearInterval(interval);
		
	}, 100);
	
	
	return positions;
}
Fire.prototype.onHitTarget = function(a,b) {};

