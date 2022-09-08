window.addEventListener('load', () => {
    const selectedProduct = document.querySelector("#selectedProduct");
    const agregarProduct = document.querySelector("#agregarProductoBt");
    const listaProductosAgregados = document.querySelector("#tableBody");
    const codSelectedProduct = document.querySelector("#codProd");
   // const listaProductosEnDroplist = document.querySelector("#datalistOptions").getElementsByTagName("option")


    //TO DO : hacer un condicional grande aca, 
    //de manera que tomamos selectedProduct lo asociamos al dato de la base de datos, entonces quedaria mas o menos de la siguiente manera (pseudo codigo):
    /* 
        var codProducto
        var descripcionProducto
        var precioProducto

        if(selectedProduct == <<cierto nombreo key del producto de la base de datos>>){
            codProducto = codProductoExtraidoDeBaseDeDatos
            descripcionProducto = descripcionProductoDeBaseDeDatos
            precioProducto = precioProductoExtraido de base de datos

        }

        Entonces se usan estos valores codProducto descripcionProducto precioProducto para rellenar el atributo value de los tags
        por ejemplo aca:
        codProductoP.setAttribute("value", "descripcionProducto")
        o algo asi, no estoy seguro de la nomenclatura
    
    
    */

    
    agregarProduct.addEventListener('click', (e) => {
        e.preventDefault();

        const producto = selectedProduct.value;
        const codigo = codSelectedProduct.value;

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
        const codProductoP = document.createElement("input")
        codProductoP.setAttribute("type", "hidden")
        codProductoP.setAttribute("value", codigo)
        codProductoP.classList.add("form-control", "d-flex", "align-items-center", "my-2", "ms-3", "inputForm", "w-50")
        codProductoP.setAttribute("readonly", "")

        //descripcion de producto
        const descripcionP = document.createElement("input")
        descripcionP.setAttribute("type", "text")
        descripcionP.setAttribute("value", producto)
        descripcionP.classList.add("form-control", "d-flex", "align-items-center", "my-2", "ms-3", "inputForm", "w-50")
        descripcionP.setAttribute("readonly", "")

        //Precio de producto
        const precioSpan = document.createElement("input")
        precioSpan.setAttribute("type", "text")
        precioSpan.setAttribute("value", "producto.precioProducto")
        precioSpan.classList.add("form-control", "d-flex", "align-items-center", "my-2", "ms-3", "inputForm", "w-50")
        precioSpan.setAttribute("readonly", "")

        //Icono borrar
        const accionI = document.createElement("i")
        accionI.classList.add("fa-solid", "fa-xmark", "my-2", "borrarProducto", "iconDelete")

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
