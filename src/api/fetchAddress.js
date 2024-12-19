const fetchAddress = (cep) => { 
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => data.erro ? {} : data) //Retorna um objeto vazio se o CEP for inválido.
      .catch(error => {
        console.error("Error fetching address:", error);
        return {}; // Retorna um objeto vazio em caso de erro também. :)
      });
  }
  
  export default fetchAddress;
  