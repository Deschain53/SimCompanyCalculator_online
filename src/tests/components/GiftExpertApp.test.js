import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

const title = 'Un titulo';
const url = 'https.fd';
const wrapper = shallow( <GifGridItem title = {title} url = {url} /> );

describe('Pruebas en <GiftExpertApp />',() => {



    test('debe mostrar <GifExpertApp/> correctamente',() => {     
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('debe tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        //console.log(img.htlml);

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener card', () => {
        const div = wrapper.find('div');
        //const className = div.prop('clasName');

        expect(div.prop('className')).toBe('card');
        //expect(className.includes('card')).toBe(true);   //  true para que lo incluya, false para que no lo incluya
    })
    
    

})