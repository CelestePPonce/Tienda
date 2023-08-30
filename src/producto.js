const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

//Colores :P
const propiedadColor = producto.querySelector('#propiedad-color');

//Cantidad
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

thumbs.addEventListener('click',(e)=>{
	if(e.target.tagName === 'IMG'){
		const imagenSrc = e.target.src;
		const lastIndex = imagenSrc.lastIndexOf('/'); //Posicion del ultimo
		const nombreImagen = (imagenSrc.substring(lastIndex + 1)); //Corte de string
		productoImagen.src = `./img/tennis/${nombreImagen}`; //ruta de imagen del producto
	}
});

propiedadColor.addEventListener('click',(e)=>{
	if(e.target.tagName === 'INPUT'){

		productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
		//console.log(e.target.value);
	}
});

btnIncrementarCantidad.addEventListener('click',(e)=>{
	inputCantidad.value = parseInt(inputCantidad.value) +1;
});
btnDisminuirCantidad.addEventListener('click',(e)=>{
	if(parseInt(inputCantidad.value)>1){
		inputCantidad.value = parseInt(inputCantidad.value) -1;
	}
});

