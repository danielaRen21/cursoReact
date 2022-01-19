import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import "../setupTest";
import CounterApp from '../CounterApp';

describe('CounterApp', () => {
    let wrapper = shallow(<CounterApp />);;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    shallow(<CounterApp />);
    test('debe de contrar el counter app correctamente', () => {

        expect(wrapper).toMatchSnapshot();


    });
    test('Debe mostrar por defecto el 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const title2 = wrapper.find('h2').text().trim();
        console.log(title2);
        expect(title2).toBe('100');
    });

    test('Debe de incrementar el contador ', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('Debe de decrementar el contador ', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });



})

