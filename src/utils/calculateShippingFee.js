function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function calculateShippingFee(region) {
    if (typeof region === 'undefined' || region === null) {
        return '—'; // Retorna travessão se a região for undefined ou null.
    }

    let shippingFee;
    switch (region) {
        case 'Nordeste':
            shippingFee = getRandomInt(5, 15);
            break;
        case 'Sul':
            shippingFee = getRandomInt(50, 70);
            break;
        case 'Sudeste':
            shippingFee = getRandomInt(30, 50);
            break;
        case 'Norte':
            shippingFee = getRandomInt(15, 30);
            break;
        case 'Centro-Oeste':
            shippingFee = getRandomInt(30, 50);
            break;
        default:
            shippingFee = 'Grátis';
    }
    return shippingFee;
}

export default calculateShippingFee;
