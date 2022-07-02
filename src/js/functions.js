function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEuroNumerico * 5.27;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento2 = document.getElementById("valor");
  var valor = valorElemento2.value;
  var valorDolarNumerico = parseFloat(valor);

  var valorEmReal = valorDolarNumerico * 5.06;
  console.log(valorEmReal);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}
