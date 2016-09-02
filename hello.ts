function greet(msg:string) {
	console.log(msg);
}

function greetingPeople(msg:string) {
	console.log(msg + " Great!!");
}

greet("Windows 10");
greetingPeople("Karl!");
  

class Car {
	engine: string;

	constructor(engine: string) {
		this.engine = engine;
	}

	start() {
		alert("Engine Started: " + this.engine);
	}

	stop() {
		alert("Engine Stoped: " + this.engine);
	}
}

window.onload = function (){
	var car = new Car('V8');
	car.start();
	car.stop();
}