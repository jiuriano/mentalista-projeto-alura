var numeroSecreto = Math.floor(Math.random() * 1000) + 1; // Gera um número aleatório entre 1 e 1000

function checkGuess() {
  var chute = parseInt(document.getElementById('userGuess').value);
  var resultElement = document.getElementById('result');

  if (chute === numeroSecreto) {
    resultElement.textContent = 'Parabéns! Você acertou!';
  } else if (chute > numeroSecreto) {
    resultElement.textContent = 'Errou... O número secreto é menor.';
  } else {
    resultElement.textContent = 'Errou... O número secreto é maior.';
  }
}
