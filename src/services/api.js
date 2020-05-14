export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resp) => resp.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((resp) => resp.json());
  }
  if (categoryId && !query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((resp) => resp.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((resp) => resp.json());
}