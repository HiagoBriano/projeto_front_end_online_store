import { Component } from 'react';
import CampoPesquisa from '../components/CampoPesquisa';
import Categorias from '../components/Categorias';
import Resultados from '../components/Resultados';
import { resultadoCategoriaPEsquisa } from '../API';
import '../CSS/Principal.css';

export default class Principal12 extends Component {
  constructor() {
    super();

    this.state = {
      resultadoPesquisa: [],
      categoriaAtual: '',
      quantidadeCarrinho: '0',
    };
  }

  componentDidMount() {
    const atualizado = JSON.parse(localStorage.getItem('carrinho'));

    if (atualizado) {
      this.setState({
        quantidadeCarrinho: atualizado.length,
      });
    }
  }

  // pega o resultado da pesquisa
  pesquisa = async () => {
    const resultado = await resultadoCategoriaPEsquisa();

    this.setState({
      resultadoPesquisa: resultado.results,
    });

    this.setState({
      categoriaAtual: localStorage.getItem('idCategory').replace(/"/g, ''),
    });
  };

  // salvar o item no carrinho
  itemCarrinho = (item) => {
    const list = JSON.parse(localStorage.getItem('carrinho'));
    item.volume = 1;

    if (list) {
      localStorage.setItem('carrinho', JSON.stringify([...list, item]));
    } else {
      localStorage.setItem('carrinho', JSON.stringify([item]));
    }

    const atualizado = JSON.parse(localStorage.getItem('carrinho'));

    this.setState({
      quantidadeCarrinho: atualizado.length,
    });
  };

  render() {
    const { resultadoPesquisa, categoriaAtual, quantidadeCarrinho } =
      this.state;
    return (
      <>
        <CampoPesquisa
          pesquisa={this.pesquisa}
          quantidadeCarrinho={quantidadeCarrinho}
        />
        <div className="ladoPrincipal">
          <Categorias
            pesquisa={this.pesquisa}
            categoriaAtual={categoriaAtual}
          />
          <Resultados
            resultadoPesquisa={resultadoPesquisa}
            itemCarrinho={this.itemCarrinho}
          />
        </div>
      </>
    );
  }
}
