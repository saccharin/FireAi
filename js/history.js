var History = function() {
	this.paths = [];
	this.best = [];
	
	this.initialV = {};
	
	this.store = 10;
}

History.prototype.add = function(path) {
	this.paths.push(path);
	
	this.best.push(path);
	this.best.sort(function(a,b) { return b.score - a.score; });
	
	if(this.best.length < this.store)
		this.best.shift();
};
