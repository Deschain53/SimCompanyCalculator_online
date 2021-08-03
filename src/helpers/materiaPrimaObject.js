//Recibe el JSON de la materia prima y devuelve un objeto con la informacion sobre el codigo y la cantidad
export const materiaPrimaObject = ({resource,amount})=> {
    console.log(resource);
    console.log(amount);

    const materiasPrimasIDall = {
        id: resource.db_letter,
        cantidad: amount
    };
    
    return materiasPrimasIDall;
}