import {getMateriasPrimas} from './getMateriasPrimas';
//import { getSalario } from './getSalario';


export const calculaCosto = (nivelEdificio,admin,bonificacion,calidad,salario,abundancia,
    productoElegidoJSON,preciosObjects) => {
    console.log(preciosObjects);
    console.log(productoElegidoJSON);
        
    const calidadMateriasPrimas = (calidad>1)? calidad-1 : 0;

    const costoMateriaPrima = getMateriasPrimas(productoElegidoJSON, calidadMateriasPrimas, preciosObjects);

    const produccionHora = (bonificacion/100 + 1 )*productoElegidoJSON.producedAnHour*(abundancia/100);

    const costoAdministrativo = (salario / produccionHora) * (admin / 100);

    //console.log(calidadMateriasPrimas);
    console.log(costoMateriaPrima);
    //console.log(salario);
    //console.log(produccionHora);
    //console.log(costoAdministrativo);

    const costoTotal = costoAdministrativo + (salario/produccionHora) + costoMateriaPrima ;

    console.log(costoTotal);

    return costoTotal; //Meter toda la informacion detallada en un objeto y eso devolverlo
}