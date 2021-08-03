//Recibe el id y la cantidad de materia así con el arreglo de precios de un producto, hace
// la multiplicacion  y devuelve el objeto

export const costoMateriasObject = ({id,precio},cantidad) => {
    console.log(precio);
    const precioMateriaPrima = precio.map( precio => precio*cantidad);
    console.log(precioMateriaPrima);

    const costoMateriasObject = {
        id: id,
        precio: precioMateriaPrima
    }

    console.log(costoMateriasObject);

    return  costoMateriasObject;
}