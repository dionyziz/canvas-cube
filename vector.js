function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.prototype = {
    rotateY: function(theta) {
        return new Vector(
            Math.cos(theta) * this.x - Math.sin(theta) * this.z,
            this.y,
            Math.sin(theta) * this.x + Math.cos(theta) * this.z
        );
    },
    rotateX: function(theta) {
        return new Vector(
            this.x,
            Math.cos(theta) * this.y - Math.sin(theta) * this.z,
            Math.sin(theta) * this.y + Math.cos(theta) * this.z
        );
    }
};
