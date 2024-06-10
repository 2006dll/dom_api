let productos= document.getElementById("Productos");
let plantilla= document.queryselector(".plantillaProductos");
let contenedor= document.getElementById("ContenedorProductos");

console.log(productos);
console.log(contenedor);

productos.querySelector("h2").innerHTML="Productos de Belleza"; /*CAMBIO EL TITULO*/

let copia= productos.cloneNode(true);
productos.remove();

/*copia.style.backgroundcolor=rgb(65, 62, 65);*/


function CargarProducto(){
    fetch("https://2006dll.github.io/dom_api/datos.json")     // Consumiendo una API https://username.github.io/reponame/file.json
    .then(response => response.json())                    
    .then(data => {
        // Procesamiento de la info que llega de la API
        console.log(data.results[0].nombre+" "+data.results[0].marca+" "+data.results[0].modoDeUso+" "+data.results[0].precio+" ")

        let nuevoProducto= copia.cloneNode(true);

        nuevoProducto.querySelector("p").innerHTML = data.results[0].nombre+" "+data.results[0].marca+" "+data.results[0].modoDeUso+" "+data.results[0].precio+" ";

        contenedor.appendChild(nuevoProducto);
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}



