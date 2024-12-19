const formatCep = (valor) => {
    const onlyNumber = valor.replace(/\D/g, ""); //Remove caracteres não numéricos

    if (onlyNumber.length > 5) { //Aplica a máscara XXXXX-XXX
      return onlyNumber.slice(0, 5) + "-" + onlyNumber.slice(5, 8);
    }
    return onlyNumber;
  };

  export default formatCep