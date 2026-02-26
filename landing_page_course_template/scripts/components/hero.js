export async function loadHeroSection() {
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <div class="hero-container">
            <h1>Diventa un Fotografo Professionista in 8 Settimane</h1>
            <p>Corso Completo di Fotografia Digitale - Da Principiante a Esperto</p>
            <div class="hero-cta">
                <a href="#registration" class="btn">Iscriviti Ora - 97€</a>
                <div class="countdown">Offerta termina tra: <span id="timer"></span></div>
            </div>
        </div>
    `;
    initCountdown();
}

function initCountdown() {
    const timerEl = document.getElementById('timer');
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 ore

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerEl.textContent = `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            timerEl.textContent = 'Offerta terminata!';
        }
    }, 1000);
}