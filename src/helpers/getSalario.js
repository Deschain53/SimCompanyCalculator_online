//Regresa el salario del edificio que produce cierto producto

export const getSalario = (id_producto,edificiosInfoObject) => {
    
    const edificio = edificiosInfoObject.find( ({produce}) => produce.includes(id_producto));
    const salario = edificio.salario;

    return salario;
}