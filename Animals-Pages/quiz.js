// Definições dos tipos
var perguntas = document.querySelectorAll('.pergunta');
var resultado = document.getElementById('resultado');
var scoreDisplay = document.getElementById('score');
var reiniciarBtn = document.getElementById('reiniciar');
var score = 0;
var perguntaAtual = 0;
perguntas.forEach(function (pergunta) {
    pergunta.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'BUTTON') {
            var correta = target.getAttribute('data-correta') === 'true';
            if (correta) {
                score++;
            }
            pergunta.classList.add('hidden');
            perguntaAtual++;
            if (perguntaAtual < perguntas.length) {
                perguntas[perguntaAtual].classList.remove('hidden');
            }
            else {
                mostrarResultado();
            }
        }
    });
});
function mostrarResultado() {
    scoreDisplay.textContent = "Voc\u00EA acertou ".concat(score, " de ").concat(perguntas.length, " perguntas!");
    resultado.classList.remove('hidden');
}
reiniciarBtn.addEventListener('click', function () {
    score = 0;
    perguntaAtual = 0;
    resultado.classList.add('hidden');
    perguntas.forEach(function (pergunta) { return pergunta.classList.add('hidden'); });
    perguntas[0].classList.remove('hidden');
});
