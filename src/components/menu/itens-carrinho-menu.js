import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

function ItensCarrinhoMenu(props) {

    function render() {

        // Carrinho vazio
        if (props.produtos.length === 0) {
            return (
                <NavDropdown.Item href="" data-testid="itens">
                    <FontAwesomeIcon icon={faSadTear} />
                    &nbsp;
                    Carrinho vazio...
                </NavDropdown.Item>
            );
        }
        // Listagem dos produtos escolhidos
        const itens = props.produtos.map(produto => 
            <NavDropdown.Item href="" key={produto.nome} data-testid={produto.nome}>
                {produto.nome} - {produto.quantidade} x {produto.preco}
            </NavDropdown.Item>
        );
        return itens;
    }

    return render();

}

ItensCarrinhoMenu.propTypes = {
    produtos: PropTypes.array.isRequired
}

export default ItensCarrinhoMenu;