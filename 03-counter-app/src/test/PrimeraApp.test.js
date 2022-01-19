import React from 'react';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import "../setupTest";

describe('PrimeraApp', () => {
    test('Debe de mostarr el mensaje "Hola soy dani"', () => {
        //const saludo = 'hola soy dani';
        // const { getByText } = render(<PrimeraApp saludo={saludo} />);
        // expect(getByText(saludo)).toBeInTheDocument();
        // //wrapper.getByText()
        const saludo = 'Daniela';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show the subtitle ', () => {
        const saludo = 'Daniela';
        const subtitulo = 'Fernanda'
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);

    })


})
