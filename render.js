var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var W = 600, H = 600;
var CONTENT_W = (2 / 3) * W,
    CONTENT_H = (2 / 3) * H;
var MARGIN_LEFT = (W - CONTENT_W) / 2,
    MARGIN_TOP = (H - CONTENT_H) / 2;

function renderPoint(p) {
    var q = modelToView(p);

    ctx.strokeStyle = 'rgba(100, 200, 255, ' + (p.z + 0.5) + ')';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(q.x, q.y);
    ctx.lineTo(q.x + 1, q.y);
    ctx.lineTo(q.x + 1, q.y + 1);
    ctx.lineTo(q.x, q.y + 1);
    ctx.stroke();
}

function modelToView(p) {
    var x = p.x,
        y = p.y;

    x /= p.z + 2;
    y /= p.z + 2;

    return new Vector(
        (p.x + 0.5) * W * (2 / 3) + MARGIN_LEFT,
        (p.y + 0.5) * H * (2 / 3) + MARGIN_TOP
    );
}

var t = new Date() | 0;

function render() {
    var newt = new Date() | 0;
    var dt = newt - t;
    t = newt;

    integrate(t, dt);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, W, H);

    for (var i = 0; i < points.length; ++i) {
        renderPoint(points[i]);
    }

    setTimeout(render, 17);
}

render();
