class productosDeBelleza { //CREO UN OBJETO USANDO CLASES
    constructor (nombre, marca, modoDeUso, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.modoDeUso=modoDeUso;
        this.precio=precio;
    }
    mostrarProductos(){ // CREO UN METODO de la clase productosDeBelleza/Es una FUNCION asociada a la clase productosDeBelleza 
        return "Nombre del producto: "+this.nombre +" " +"Marca: "+this.marca +" " +"Modo de Uso: "+this.modoDeUso+" " +"Precio: "+this.precio;
    }
};

//INSTANCIAR UNA CLASE
let producto1 = new productosDeBelleza("Aceite Facial Antioxidante","Carpe Diem","Aplicar de 1 a 2 gotas sobre el rostro limpio. Con las manos higienizadas, distribuir sobre frente, mejillas, barbilla y cuello. Masajear con la yema de los dedos.",37000)
let producto2= new productosDeBelleza("Crema Corporal.Body Milk","Carpe Diem","Aplicar en todo el cuerpo la cantidad suficiente según necesidad. Masajear suavemente sobre la piel limpia hasta su  completa absorción. Se recomienda su uso después del baño o la ducha, hasta dos veces al día.",35000)
let producto3 = new productosDeBelleza("Contorno de Ojos.Eye Cream.","Carpe Diem","Con las manos higienizadas, aplicar sobre el dedo anular y dar suaves toquecitos hasta que absorba, sin frotar ni estirar debajo y a lo largo del ojo. No se recomienda aplicar en el párpado superior. Utilizar hasta 2 veces por día.",29000)


let lista_productos = [producto1, producto2, producto3];

console.log(producto1.mostrarProductos());
console.log(producto2.mostrarProductos());
console.log(producto3.mostrarProductos());


