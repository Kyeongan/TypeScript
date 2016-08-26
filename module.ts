module anyType {
	//any
	var data: any;
	var info;
	var doSomething : any = function(arg:any) {
		return arg;
	}

	// primitives
	var age: number = 21;
	var scroe: number = 34.56;
	var rating = 99.99;
	var hasData: boolean = true;
	var isReady = true;
	var isBald = function () {return 'yes';}
	var hasHair = !!isBald();

	function getArrayLength(x:string[]) {
		var len: number = x.length;
		return len;
	}

	var name:string[] = ["karl","John", "Joan"];
	console.log(getArrayLength(name));

	// null
	var guitarSales: any = null;


}