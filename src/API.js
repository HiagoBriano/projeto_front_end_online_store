export async function resultadoCategoriaPEsquisa() {
  // recupera valor do pesquisado
  const query = localStorage.getItem('Input');

  // recupera a categoria
  let categoryId = localStorage.getItem('idCategory');

  if (categoryId) {
    categoryId = categoryId.replace(/"/g, '');
  }

  // faz a busca pelo campo de pesquisa e pelo id da categoria
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  );

  const resultado = await response.json();
  return resultado;
}

// buscar lista de categorias
export async function listaCategorias() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories'
  );
  return response.json();
}
