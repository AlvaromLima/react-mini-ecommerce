import React from 'react';
import { render } from '@testing-library/react';
import Checkout from './checkout';

describe('Teste do componente checkout' , () => {

    it('deve reinderizar o componente sem erros', () => {
        const { getAllByText } = render(<Checkout />);
        const textos = getAllByText('Finalizar Compra');
        expect(textos[0]).toBeInTheDocument();
    });
    
});