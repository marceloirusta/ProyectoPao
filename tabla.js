window.addEventListener('load', () => {
    const selectedProduct = document.querySelector("#selectedProduct");
    const agregarProduct = document.querySelector("#agregarProductoBt");
    const listaProductosAgregados = document.querySelector("#tableBody");
    const listaProductosEnDroplist = document.querySelector("#datalistOptions").getElementsByTagName("option")


    var arr = [].slice.call(listaProductosEnDroplist)
    console.log(arr);
    
    agregarProduct.addEventListener('click', (e) => {
        e.preventDefault();

        const producto = selectedProduct.value;

        if(!producto){
            alert("Por favor seleccione un producto de la lista")
            return;
        }

        //creando estructura de cada fila de la tabla
        const productoAgregadoTR = document.createElement("tr")
        const productoAgregadoTDcodProducto = document.createElement("td")
        const productoAgregadoTDDescripcion = document.createElement("td")
        const productoAgregadoTDPrecio = document.createElement("td")
        const productoAgregadoTDAccion = document.createElement("td")

        const codProductoTD = productoAgregadoTR.appendChild(productoAgregadoTDcodProducto)
        const descripcionTD = productoAgregadoTR.appendChild(productoAgregadoTDDescripcion)
        const precioTD = productoAgregadoTR.appendChild(productoAgregadoTDPrecio)
        const accionTD = productoAgregadoTR.appendChild(productoAgregadoTDAccion)

        //codigo de producto
        const codProductoP = document.createElement("p")
        codProductoP.classList.add("d-flex", "align-items-center", "text-muted", "my-2", "ms-3")
        codProductoP.innerText = "19678AB"

        //descripcion de producto
        const descripcionP = document.createElement("p")
        descripcionP.classList.add("text-muted", "my-2")
        descripcionP.innerText = selectedProduct.value

        //Precio de producto
        const precioSpan = document.createElement("span")
        precioSpan.classList.add("text-muted", "text-end", "my-2")
        precioSpan.innerText = "1111$"

        //Icono borrar
        const accionI = document.createElement("i")
        accionI.classList.add("fa-solid", "fa-xmark", "my-2", "borrarProducto")

        codProductoTD.appendChild(codProductoP)
        descripcionTD.appendChild(descripcionP)
        precioTD.appendChild(precioSpan)
        accionTD.appendChild(accionI)


        listaProductosAgregados.appendChild(productoAgregadoTR)

        
        accionI.addEventListener('click', (e) => {
            listaProductosAgregados.removeChild(productoAgregadoTR)

        })
        
    })
})
