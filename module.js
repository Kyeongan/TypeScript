var anyType;
(function (anyType) {
    //any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    // primitives
    var age = 21;
    var scroe = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var name = ["karl", "John", "Joan"];
    console.log(getArrayLength(name));
    // null
    var guitarSales = null;
})(anyType || (anyType = {}));
