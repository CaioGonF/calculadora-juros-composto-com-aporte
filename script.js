console.log("Teste");

function calcular() {
  var valorInicial = Number(document.getElementById("valorInicial").value);
  console.log(valorInicial);
  var valorMensal = Number(document.getElementById("valorMensal").value);
  console.log(valorMensal);
  var periodoTaxa = document.getElementById("periodoTaxa").value;
  console.log(periodoTaxa);
  var periodoTempo = document.getElementById("periodoTempo").value;
  console.log(periodoTempo);
  var taxaJuros = Number(document.getElementById("taxaJuros").value) / 100;
  if (periodoTaxa == "anual") {
    taxaJuros = (1 + taxaJuros) ** (1 / 12) - 1;
  }
  console.log(taxaJuros);
  var periodo = Number(document.getElementById("periodo").value);
  if (periodoTempo == "anual") {
    periodo = periodo * 12;
  }
  if (periodo <= 0) {
    periodo = 1;
  }
  if (valorTotal <= 0) {
    valorTotal = 1;
  }
  var valorTotal = valorInicial * (1 + taxaJuros) ** periodo;
  var periodo2 = periodo;

  while (periodo > 0) {
    periodo--;
    var jurosPorMes = valorMensal * (1 + taxaJuros) ** periodo;
    var valorTotal = valorTotal + jurosPorMes;
  }

  console.log(periodo);

  if (valorInicial >= 0 && valorMensal >= 0 && taxaJuros >= 0 && periodo >= 0) {
    while (periodo > 0) {
      var jurosPorMes = valorMensal * (1 + taxaJuros) ** periodo;
      var valorTotal = valorTotal + jurosPorMes;
      periodo--;
    }
    var valorInvestido = valorInicial + valorMensal * periodo2;
    var valorJuros = valorTotal - valorInvestido;

    let BrReal = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    document.getElementById("valorTotal").innerHTML = BrReal.format(valorTotal);

    document.getElementById("valorInvestido").innerHTML =
      BrReal.format(valorInvestido);
    document.getElementById("valorJuros").innerHTML = BrReal.format(valorJuros);
    const resultado = document.querySelector(".resultado");
    resultado.classList.add("mostrar");
  } else {
    alert("Preencha todos os campos com valores positivos!");
    return;
  }
}
