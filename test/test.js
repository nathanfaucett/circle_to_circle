var assert = require("assert"),
    circleToCircle = require("../src/index");


describe("circleToCircle(x1 : Number, y1 : Number, r1 : Number, x2 : Number, y2 : Number, r2 : Number)", function() {
    it("should return contact2 if collision false if not", function() {
        assert.deepEqual(circleToCircle(-1, 0, 1.1, 1, 0, 1.1), {
            normal: [1, 0],
            point: [0, 0],
            depth: 0.10000000000000009
        });
        assert.equal(circleToCircle(-1, 0, 1, 1, 0, 1), false);
    });
});
