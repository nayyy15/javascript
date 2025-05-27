function calcularMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  if ([nota1, nota2, nota3].some(isNaN)) {
    alert('Por favor, preencha todas as notas.');
    return;
  }

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  let mensagem = `Média final: ${media}<br>`;

  if (media >= 6) {
    mensagem += 'Situação: <strong>Aprovado! 🎉</strong>';
    console.log("Aprovado! 🎉");
  } else {
    mensagem += 'Situação: <strong>Reprovado! 😞</strong>';
    console.log("Reprovado! 😞");
  }

  document.getElementById('resultado').innerHTML = mensagem;
}
