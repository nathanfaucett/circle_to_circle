var mathf = require("mathf"),
    vec2 = require("vec2"),
    Contact2 = require("contact2");


module.exports = function circleToCircle(x1, y1, r1, x2, y2, r2) {
    var dx = x2 - x1,
        dy = y2 - y1,
        r = r1 + r2,
        rsq = r * r,
        dsq = dx * dx + dy * dy,
        contact, d, invD, invR, nx, ny;

    if (dsq < rsq) {
        contact = Contact2.create();

        if (dsq !== 0) {
            d = mathf.sqrt(dsq);
            invD = 1 / d;

            nx = dx * invD;
            ny = dy * invD;
        } else {
            nx = 0;
            ny = 1;
        }

        invR = r !== 0 ? 1 / r : 0;

        vec2.set(contact.point, (x1 * r2 + x2 * r1) * invR, (y1 * r2 + y2 * r1) * invR);
        vec2.set(contact.normal, nx, ny);
        contact.depth = (r - d) * 0.5;

        return contact;
    } else {
        return false;
    }
};
