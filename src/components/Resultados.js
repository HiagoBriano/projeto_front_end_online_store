import { Component } from 'react';
import '../CSS/Resultados.css';

export default class Resultados extends Component {
  render() {
    const { resultadoPesquisa, itemCarrinho } = this.props;
    return (
      <div className="lado">
        {resultadoPesquisa.map((atual) => (
          <div className="card cardResultados">
            <img
              src={`${atual.thumbnail}`}
              className="card-img-top"
              alt={`${atual.title}`}
              height="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{atual.title}</h5>
              <p className="card-text">{`R$ ${atual.price
                .toFixed(2)
                .replace('.', ',')}`}</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => itemCarrinho(atual)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
