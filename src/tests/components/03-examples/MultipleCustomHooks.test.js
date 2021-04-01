import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');



describe('Pruebas en el componente <MultipleCustomHooks />', () => {

    

    test('debe mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () =>{}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(

            <MultipleCustomHooks />
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debede mostrar la información', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () =>{}
        });

        useFetch.mockReturnValue({
            data: [{
                author: 'Diego',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(

            <MultipleCustomHooks />
        );

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Diego');

    });

});