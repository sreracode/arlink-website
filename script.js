function navigate() {
    const hash = window.location.hash;
    const contentDiv = document.getElementById('content');

    if (hash === '#/about') {
        contentDiv.innerHTML = `
            <section class="hero">
                <h2>Tentang Aplikasi Ini</h2>
                <p>Aplikasi ini dirancang untuk menunjukkan penggunaan Arweave dengan tampilan yang menarik.</p>
            </section>
        `;
    } else {
        contentDiv.innerHTML = `
            <section class="hero">
                <h2>Selamat datang di Halaman Utama!</h2>
                <p>Jelajahi fitur menarik dari website ini.</p>
            </section>
        `;
    }
}

// Mengatur navigasi saat halaman dimuat atau hash berubah
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);