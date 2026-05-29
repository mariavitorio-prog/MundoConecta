document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Ação do Botão Principal (Rolar até os pilares)
    const btnConhecer = document.getElementById("btn-conhecer");
    if (btnConhecer) {
        btnConhecer.addEventListener("click", function() {
            document.getElementById("pilares").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Interatividade dos botões de Tecnologia Sustentável
    const techButtons = document.querySelectorAll(".tech-btn");
    const techDisplay = document.getElementById("tech-display");

    techButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Pega o texto explicativo guardado no atributo 'data-info' do HTML
            const infoText = this.getAttribute("data-info");
            
            // Adiciona um efeito simples de transição mudando a opacidade
            techDisplay.style.opacity = 0;
            
            setTimeout(() => {
                techDisplay.innerHTML = `<p><strong>${this.innerText}:</strong> ${infoText}</p>`;
                techDisplay.style.opacity = 1;
            }, 200);
        });
    });
});
