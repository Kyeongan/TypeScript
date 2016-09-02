var myFunc = function (h: number, w: number) {
	return h * w;
}

var myFunc2 = (h: number, w: number) => h*w;

var myFund3 : (msg: string) => void;

var squareItSimple = function (h: number, w:number) {
	return h * w;
}

var helloWorld: (name?: string) => void;
helloWorld = (name? :string) => {
	console.log("Hello " + (name || ' unknown person'));
}

helloWorld();
helloWorld("Karl");
