import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Diego',
        email: 'diegomunoz.az@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {

        const {result} = renderHook( () => useForm(initialForm));

        const [values,handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {

        const {result} = renderHook( () => useForm(initialForm));

        const [,handleInputChange] = result.current;

        act( () =>{
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Manuel'
                }
            });
        });

        const [values] = result.current;

        expect(values).toEqual({...initialForm, name:'Manuel'});
    });

    test('Debe de re-establecer el formulario con rest', () => {

        const {result} = renderHook( () => useForm(initialForm));

        const [,handleInputChange,reset] = result.current;

        act( () =>{
            handleInputChange({
                target:{
                    name: {
                        name: 'Manuel'
                    }
                }
            });
            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });

});