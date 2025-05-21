
const spider = new Personaje("spiderman");

const div2 = document.getElementByClassName("detalle")[1];

if (div2){
	div2.innetHTML = `Mi nombre es: ${spider.name}`;
}