module demo {

	interface squareFunction {
		(x: number) : number;
	}


	var s: squareFunction = (num, foo) => num * num;
	var square = (num) => num * num;
}