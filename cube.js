var points = [];
var STEP = 0.1;
var DELTA_THETA = 0.01 / 40,
    DELTA_PHI = 0.027 / 40;

function init() {
    for (var x = -0.5; x <= 0.5; x += STEP) {
        for (var y = -0.5; y <= 0.5; y += STEP) {
            for (var z = -0.5; z <= 0.5; z += STEP) {
                if (Math.abs(x) == 0.5
                 || Math.abs(y) == 0.5
                 || Math.abs(z) == 0.5) {
                    points.push(
                        new Vector(
                            x, y, z
                        )
                    );
                }
            }
        }
    }
}

function integrate(t, dt) {
    for (var i = 0; i < points.length; ++i) {
        points[i] = points[i].rotateY(
            DELTA_THETA * dt * Math.sin(t / 4000)
        ).rotateX(
            DELTA_PHI * dt * Math.cos(t / 9000)
        );
    }
}


init();
