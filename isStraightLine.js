var checkStraightLine = function (
    coordinates = [
        [-3, -2],
        [-1, -2],
        [2, -2],
        [-2, -2],
        [0, -2],
    ]
) {
    let m;
    let slope = null;
    for (i = 0; i < coordinates.length - 1; i++) {
        let [x1, y1] = coordinates[i];
        let [x2, y2] = coordinates[i + 1];
        if (x2 - x1 == 0) m = float("inf");
        else m = parseFloat(y2 - y1) / (x2 - x1);
        if (slope == null) slope = m;
        else if (slope !== m) return false;
    }

    return true;
};

console.log(checkStraightLine());
