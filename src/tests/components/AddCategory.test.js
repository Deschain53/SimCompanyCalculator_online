import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';
import testUtils from 'react-dom/test-utils';

describe('Pruebas en <AddCategory />',() =>{
    const setCategories = jest.fn();
    let wrapper; //= shallow(<AddCategory setCategories = {setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('debe de mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot(); 
    }) 

    test('debe de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change',{ target:{ value: value} });
        //wrapper.find('input').simulate('change',{target:{value}});
        expect( wrapper.find('p').text().trim()).toBe(value);
    })

    test('no debe de postear la informacion con submit ', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';

        //1.- Simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});

        //2.- Simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        //3.- setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledTimes(1);
        expect( setCategories ).toBeCalledWith( expect.any(Function));

        //4.- El valor del input debe estar en ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    




    /*test('debe de simular el change', () => {
        wrapper.find('input').simulate('change',{ preventDefault(){} });

        expect(handleInputChange).HaveBeenCalled();      
    })

    test('setCategories llamado', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();

    })*/  

});