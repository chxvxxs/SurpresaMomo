// Função para o efeito de digitação
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Aplicar o efeito de digitação ao título
const typingElement = document.getElementById('typing-effect');
typeEffect(typingElement, 100);

// Função para atualizar o timer
function updateTimer() {
    const startDate = new Date("2024-05-18T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timerElement = document.getElementById('timer');
    timerElement.innerText = `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

    // Efeito de piscar no timer
    timerElement.style.color = (timerElement.style.color === 'red') ? '#fff' : 'red';
}

setInterval(updateTimer, 1000);
updateTimer();

// Adiciona corações ao fundo
const heartsBackground = document.querySelector('.hearts-background');

function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartsBackground.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);