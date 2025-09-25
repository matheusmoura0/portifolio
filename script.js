// Espera o conteúdo da página carregar para executar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO PARTICLES.JS ---
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00bfff"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });


    // --- LÓGICA DO KONAMI CODE ---
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'b', 'a'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (event) => {
        // Verifica se a tecla pressionada é a próxima na sequência
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++; // Avança na sequência
            // Se a sequência estiver completa
            if (konamiIndex === konamiCode.length) {
                showKonamiMessage();
                konamiIndex = 0; // Reseta para poder ser ativado de novo
            }
        } else {
            // Se a tecla errada for pressionada, reseta a sequência
            konamiIndex = 0;
        }
    });

    function showKonamiMessage() {
        // Cria o elemento da mensagem
        const messageElement = document.createElement('div');
        messageElement.className = 'konami-message';
        messageElement.textContent = 'Per aspera ad astra';
        
        document.body.appendChild(messageElement);

        // Força o navegador a renderizar o elemento antes de mudar a opacidade
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 10);
        
        // Remove a mensagem após alguns segundos
        setTimeout(() => {
            messageElement.style.opacity = '0';
            // Espera a transição de fade-out terminar para remover o elemento
            setTimeout(() => {
                document.body.removeChild(messageElement);
            }, 500);
        }, 3000); // A mensagem fica visível por 3 segundos
    }
});