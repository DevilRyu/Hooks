import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en el componente <HookApp />', () => {

    let wrapper = shallow(

        <HookApp />
    );

   
    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

});