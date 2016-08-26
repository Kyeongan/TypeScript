var objType;
(function (objType) {
    var point1 = { x: 10, y: 20 };
    var x = point1.x;
    var y = point1.y;
    var point2;
    point2 = { x: 10, y: 20 };
    var point3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 15,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calcArea());
})(objType || (objType = {}));
