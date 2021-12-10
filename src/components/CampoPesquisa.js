import { Component } from 'react';
import '../CSS/CampoPesquisa.css';

export default class CampoPesquisa extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  atualizaInput = ({ target: { value } }) => {
    this.setState({ inputValue: value });

    // guarda o valor do input no local Storage
    localStorage.setItem('Input', JSON.stringify(value));
  };

  limpar = () => {
    // localStorage.removeItem('idCategory');
    localStorage.setItem('idCategory', '');
    const { pesquisa } = this.props;
    pesquisa();
  };

  render() {
    let { inputValue } = this.state;
    const { quantidadeCarrinho } = this.props;

    return (
      <nav className="barraNavegacao">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <span>
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o item procurado"
                value={inputValue}
                onChange={this.atualizaInput}
              />
              <button
                className="input-group-text"
                onClick={() => this.limpar()}
              >
                Pesquisar
              </button>
            </div>
          </li>
          <button
            type="button"
            className="btn bg-info position-relative carrinho"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5008/5008638.png"
              alt="some text"
              width="42px"
              height="42px"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {quantidadeCarrinho}
              <span className="visually-hidden">itens no carrinho</span>
            </span>
          </button>
        </ul>
      </nav>
    );
  }
}
