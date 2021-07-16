//Recibe el array con los precios de los productos una vez la promesa se ha cumplido
//se procesan los datos y se devuelve el array con los precios 


export const getProductosOrdenados = (preciosProducto) => {
    
    const calidadMaxima = 6;
    let precios = new Array();

    //Para encontrar los precios de cada calidad
    for(let i = 0 ; i < calidadMaxima; i++){
        const aux = preciosProducto.find(producto => producto.calidad === i);
        if(aux !== undefined ){
            precios[i] = aux.precio;
        }else{
            precios[i] = -1;
        }
    } 

    //Para ordenar correctamente los precios de las calidades
    for(let i = preciosProducto.lenght-1; i > 0; i--){
        if(precios[i] < precios[i-1] && precios[i] > 0){
            precios[i-1] = precios[i];
        }else if(precios[i-1] === -1 && precios[i] > 0){
            precios[i-1] = precios[i];
        }
    }

    console.log(precios);

    const preciosConst = {...precios}

    return preciosConst;
}