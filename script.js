const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
// Seleciona os botões e passos
const botoes = document.querySelectorAll('.btn-proximo');
const passos = document.querySelectorAll('.passo');

// Seleciona os elementos de áudio
const backgroundSound = document.getElementById('background-sound');
const clickSound = document.getElementById('click-sound');
const changeSound = document.getElementById('change-sound');

// Variável para garantir que o som de fundo inicia apenas uma vez
let somFundoIniciado = false;

// Adiciona eventos aos botões
botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        // Inicia o som de fundo no primeiro clique
        if (!somFundoIniciado) {
            backgroundSound.volume = 0.3; // Ajuste o volume conforme necessário
            backgroundSound.play().catch((error) => {
                console.error("Erro ao iniciar o som de fundo:", error);
            });
            somFundoIniciado = true;
        }

        // Reproduz som de clique
        clickSound.currentTime = 0; // Reinicia o som
        clickSound.play();

        // Obtém o próximo passo
        const proximoPassoId = botao.getAttribute('data-proximo');
        mudarCenario(proximoPassoId);
    });
});

// Função para mudar de cenário
function mudarCenario(proximoPassoId) {
    // Reproduz som de mudança de cenário
    changeSound.currentTime = 0;
    changeSound.play();

    // Esconde o cenário atual
    passos.forEach(passo => passo.classList.remove('ativo'));

    // Mostra o próximo cenário
    const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
    if (proximoPasso) {
        proximoPasso.classList.add('ativo');
    }
}
