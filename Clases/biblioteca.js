
class Personaje {
	name;
	type = "player";
	lifes = 5;
	energy= 10;

	constructor(name){
		this.name = name
		console.log(`Bienvenido, ${this.name}`);
	}


	hola(){
		return this.name;

	}
}