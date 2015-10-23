var tape = require("tape"),
    circleToCircle = require("..");


tape("circleToCircle(x1 : Number, y1 : Number, r1 : Number, x2 : Number, y2 : Number, r2 : Number)", function(assert) {
    assert.deepEqual(circleToCircle(-1, 0, 1.1, 1, 0, 1.1), {
        normal: {
            0: 1,
            1: 0
        },
        point: {
            0: 0,
            1: 0
        },
        depth: 0.10000000000000009,
        data: null
    });
    assert.equal(circleToCircle(-1, 0, 1, 1, 0, 1), false);
    assert.end();
});
