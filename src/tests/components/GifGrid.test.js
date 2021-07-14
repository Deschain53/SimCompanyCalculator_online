import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

const category = 'AttackOnTitan';
const wrapper = shallow(<GifGrid category = {category} />);


describe('Pruebas en el GifGrid',()=>{

    test('debe mostrar <GifExpertApp/> correctamente',() => {     
        expect(wrapper).toMatchSnapshot();
    });

})