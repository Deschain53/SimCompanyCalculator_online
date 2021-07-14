import {getGifs} from '../../helpers/getGifs';

describe('Pruebas con getGifs Fecth',()=>{
    jest.setTimeout(15000)

    test('debe de traer 10 elementos', async() => {
        /*const gifs = await getGifs('Attack on titan'); 
        console.log(gifs);
        expect(gifs.lenght).toBe(10);*/
    })
    
    
    test('al enviar nada el array debe estar vacio', async() => {

        /*const gifs = await getGifs(''); 

        expect(gifs.lenght).toBe(0);*/
    })

})