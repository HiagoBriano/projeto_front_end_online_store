import { Component } from 'react';
import { listaCategorias } from '../API';
import '../CSS/Categorias.css';

export default class Categorias extends Component {
  constructor() {
    super();

    this.state = {
      resultadoCategoria: [],
    };
  }

  componentDidMount() {
    this.categorias();
  }

  categorias = async () => {
    const dados = await listaCategorias();
    this.setState({ resultadoCategoria: dados });
  };

  atualizaId = async (evento) => {
    evento.preventDefault();
    const { value } = evento.target;

    // guarda o valor do input no local Storage
    localStorage.setItem('idCategory', JSON.stringify(value));

    const { pesquisa } = this.props;
    pesquisa();
  };

  render() {
    const { resultadoCategoria } = this.state;
    const { categoriaAtual } = this.props;
    return (
      <div class="list-group tamanho">
        {resultadoCategoria.map(({ id, name }) => (
          <button
            type="button"
            className={
              categoriaAtual === id
                ? 'list-group-item list-group-item-action active'
                : 'list-group-item list-group-item-action'
            }
            aria-current="true"
            key={id}
            value={id}
            onClick={this.atualizaId}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}
