function Path() {
	this.positions = [];
	
}

Path.prototype.next = function() {
};
Path.prototype.currentPosition = function() {
	return this.positions[this.positions.length - 1];
};