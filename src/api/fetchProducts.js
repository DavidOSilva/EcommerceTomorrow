const fetchProducts = (query) => {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }
  
export default fetchProducts;
  