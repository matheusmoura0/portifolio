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
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showKonamiMessage();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function showKonamiMessage() {
        const messageElement = document.createElement('div');
        messageElement.className = 'konami-message';
        messageElement.textContent = 'Per aspera ad astra';
        document.body.appendChild(messageElement);
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(messageElement);
            }, 500);
        }, 3000);
    }

    // --- LÓGICA DE TRADUÇÃO ---
    const translations = {
        en: {
            tituloProfissao: "Full Stack Developer",
            sobreTitulo: "About Me",
            sobreTexto: "Full-Stack Developer with solid experience in Ruby on Rails and a strong interest in modern front-end technologies like React and Node.js. I aim to merge back-end robustness with front-end dynamism to build complete, high-quality solutions. I am fluent in English (C1 level).",
            habilidadesTitulo: "Technologies",
            experienciaTitulo: "Experience & Education",
            exp1Titulo: "Full Stack Developer at Humanoide",
            exp1Descricao: "Worked on projects with Ruby on Rails, including Full Stack development with Slim and creating back-end focused APIs, ensuring clean code and efficient features.",
            exp2Titulo: "Fullstack Development at Trybe",
            exp2Descricao: "Over 1,500 hours of training in front-end, back-end, computer science, agile methodologies, and soft skills through practical, hands-on projects.",
            exp3Titulo: "Advanced Course Fullcycle 3.0",
            exp3Data: "In progress",
            exp3Descricao: "Deepening knowledge in software architecture, microservices, messaging, DevOps, and CI/CD for high-performance software engineering.",
            contatoTitulo: "Contact",
            contatoSubtitulo: "Let's talk! You can find me below:",
            contatoEmail: "Email",
            footerTexto: "© 2025 Matheus Moura de Oliveira. All rights reserved."
        },
        pt: {
            tituloProfissao: "Desenvolvedor Full Stack",
            sobreTitulo: "Sobre Mim",
            sobreTexto: "Desenvolvedor Full-Stack com sólida experiência em Ruby on Rails e grande interesse em tecnologias front-end modernas como React e Node.js. Busco unir a robustez do back-end com o dinamismo do front-end para construir soluções completas e de alta qualidade. Sou fluente em inglês (nível C1).",
            habilidadesTitulo: "Tecnologias",
            experienciaTitulo: "Experiência e Formação",
            exp1Titulo: "Desenvolvedor Full Stack na Humanoide",
            exp1Descricao: "Atuação em projetos com Ruby on Rails, incluindo desenvolvimento Full Stack com Slim e criação de APIs focadas em back-end, garantindo código limpo e funcionalidades eficientes.",
            exp2Titulo: "Formação Fullstack na Trybe",
            exp2Descricao: "Mais de 1.500 horas de formação em front-end, back-end, ciência da computação, metodologias ágeis e soft skills através de projetos práticos.",
            exp3Titulo: "Curso Avançado Fullcycle 3.0",
            exp3Data: "Em andamento",
            exp3Descricao: "Aprofundamento em arquitetura de software, microsserviços, mensageria, DevOps e CI/CD para desenvolvimento de alta performance.",
            contatoTitulo: "Contato",
            contatoSubtitulo: "Vamos conversar! Você pode me encontrar abaixo:",
            contatoEmail: "Email",
            footerTexto: "© 2025 Matheus Moura de Oliveira. Todos os direitos reservados."
        }
    };

    const langPtBtn = document.getElementById('lang-pt');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);

        if (lang === 'pt') {
            langPtBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPtBtn.classList.remove('active');
        }
    };

    langPtBtn.addEventListener('click', () => setLanguage('pt'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);

});