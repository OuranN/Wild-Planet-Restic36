// Definições dos tipos
const perguntas: NodeListOf<HTMLDivElement> = document.querySelectorAll('.pergunta');
const resultado: HTMLDivElement = document.getElementById('resultado') as HTMLDivElement;
const scoreDisplay: HTMLParagraphElement = document.getElementById('score') as HTMLParagraphElement;
const reiniciarBtn: HTMLButtonElement = document.getElementById('reiniciar') as HTMLButtonElement;

let score: number = 0;
let perguntaAtual: number = 0;

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      const correta: boolean = (target as HTMLButtonElement).getAttribute('data-correta') === 'true';
      if (correta) {
        score++;
      }
      pergunta.classList.add('hidden');
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        perguntas[perguntaAtual].classList.remove('hidden');
      } else {
        mostrarResultado();
      }
    }
  });
});

function mostrarResultado(): void {
  scoreDisplay.textContent = `Você acertou ${score} de ${perguntas.length} perguntas!`;
  resultado.classList.remove('hidden');
}

reiniciarBtn.addEventListener('click', (): void => {
  score = 0;
  perguntaAtual = 0;
  resultado.classList.add('hidden');
  perguntas.forEach(pergunta => pergunta.classList.add('hidden'));
  perguntas[0].classList.remove('hidden');
});
