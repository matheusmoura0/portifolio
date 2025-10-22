/* ================================== */
/* 1. Objeto de Traduções (ATUALIZADO)
/* ================================== */
const translations = {
    'en': {
        'tituloProfissao': 'Full Stack Developer',
        'sobreTitulo': 'About Me',
        'sobreTexto': 'Full-Stack Developer with solid experience in Ruby on Rails and a strong interest in modern front-end technologies like React and Node.js. I aim to combine back-end robustness with front-end dynamism to build complete, high-quality solutions. I am fluent in English (C1 level).',
        'habilidadesTitulo': 'Technologies',
        'projetosTitulo': 'Projects',
        // --- Descrições dos Projetos Atualizadas ---
        'projeto1Desc': 'A web application to search for movies, add them to a favorites list, and share that list via a unique link.',
        'projeto2Desc': 'A manager for service orders, clients, and collaborators, built with React, Node.js, and MaterialUI.',
        'projeto3Desc': 'A simple product API developed with Go (Golang) and containerized with Docker.',
        'projetoLink': 'View on GitHub',
        // --- Fim das Descrições ---
        'experienciaTitulo': 'Experience & Education',
        'exp1Titulo': 'Full Stack Developer at Humanoide',
        'exp1Descricao': 'Worked on projects with Ruby on Rails, including Full Stack development with Slim and creating back-end focused APIs, ensuring clean code and efficient functionalities.',
        'exp2Titulo': 'Fullstack Training at Trybe',
        'exp2Descricao': 'Over 1,500 hours of training in front-end, back-end, computer science, agile methodologies, and soft skills through practical projects.',
        'exp3Titulo': 'Advanced Course Fullcycle 3.0',
        'exp3Data': 'In progress',
        'exp3Descricao': 'Deepening knowledge in software architecture, microservices, messaging, DevOps, and CI/CD for high-performance development.',
        'contatoTitulo': 'Contact',
        'contatoSubtitulo': "Let's talk! You can find me below:",
        'contatoEmail': 'Email',
        'footerTexto': '© 2025 Matheus Moura de Oliveira. All rights reserved.'
    },
    'pt': {
        'tituloProfissao': 'Desenvolvedor Full Stack',
        'sobreTitulo': 'Sobre Mim',
        'sobreTexto': 'Desenvolvedor Full-Stack com sólida experiência em Ruby on Rails e grande interesse em tecnologias front-end modernas como React e Node.js. Busco unir a robustez do back-end com o dinamismo do front-end para construir soluções completas e de alta qualidade. Sou fluente em inglês (nível C1).',
        'habilidadesTitulo': 'Tecnologias',
        'projetosTitulo': 'Projetos',
        // --- Descrições dos Projetos Atualizadas ---
        'projeto1Desc': 'Aplicação web para pesquisar filmes, adicionar aos favoritos e compartilhar a lista com um link exclusivo.',
        'projeto2Desc': 'Gerenciador de ordens de serviço, clientes e colaboradores, construído com React, Node.js e MaterialUI.',
        'projeto3Desc': 'Uma API simples de produtos desenvolvida com Go (Golang) e containerizada com Docker.',
        'projetoLink': 'Ver no GitHub',
        // --- Fim das Descrições ---
        'experienciaTitulo': 'Experiência e Formação',
        'exp1Titulo': 'Desenvolvedor Full Stack na Humanoide',
        'exp1Descricao': 'Atuação em projetos com Ruby on Rails, incluindo desenvolvimento Full Stack com Slim e criação de APIs focadas em back-end, garantindo código limpo e funcionalidades eficientes.',
        'exp2Titulo': 'Formação Fullstack na Trybe',
        'exp2Descricao': 'Mais de 1.500 horas de formação em front-end, back-end, ciência da computação, metodologias ágeis e soft skills através de projetos práticos.',
        'exp3Titulo': 'Curso Avançado Fullcycle 3.0',
        'exp3Data': 'Em andamento',
        'exp3Descricao': 'Aprofundamento em arquitetura de software, microsserviços, mensageria, DevOps e CI/CD para desenvolvimento de alta performance.',
        'contatoTitulo': 'Contato',
        'contatoSubtitulo': 'Vamos conversar! Você pode me encontrar abaixo:',
        'contatoEmail': 'Email',
        'footerTexto': '© 2025 Matheus Moura de Oliveira. Todos os direitos reservados.'
    }
};

/* ================================== */
/* 2. Lógica de Tradução
/* ================================== */
function setLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Atualiza classes ativas nos botões
    document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

/* ================================== */
/* 3. Lógica do Carrossel
/* ================================== */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    // Previne erro se o carrossel não existir na página
    if (!track) return; 

    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    if (slides.length === 0) return; // Não faz nada se não houver slides

    // Recalcula a largura do slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Organiza slides horizontalmente
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentIndex = 0;

    const moveToSlide = (targetIndex) => {
        // Recalcula a largura do slide ANTES de mover, para o caso de redimensionamento da janela
        const currentSlideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + currentSlideWidth * targetIndex + 'px)';
        currentIndex = targetIndex;
        updateNavButtons();
    };

    const updateNavButtons = () => {
        prevButton.classList.toggle('is-hidden', currentIndex === 0);
        nextButton.classList.toggle('is-hidden', currentIndex === slides.length - 1);
    };

    // Event Listeners dos botões
    nextButton.addEventListener('click', e => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        }
    });

    prevButton.addEventListener('click', e => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });

    // Adiciona um listener para reajustar o carrossel se a janela mudar de tamanho
    window.addEventListener('resize', () => {
        moveToSlide(currentIndex);
    });

    // Inicializa botões
    updateNavButtons();
}

/* ================================== */
/* 4. Inicialização do particles.js
/* ================================== */
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
                "color": {"value": "#ffffff"},
                "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}, "polygon": {"nb_sides": 5}},
                "opacity": {"value": 0.5, "random": false, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
                "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
                "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
                "move": {"enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}}
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {"onhover": {"enable": true, "mode": "repulse"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
                "modes": {"grab": {"distance": 400, "line_linked": {"opacity": 1}}, "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3}, "repulse": {"distance": 200, "duration": 0.4}, "push": {"particles_nb": 4}, "remove": {"particles_nb": 2}}
            },
            "retina_detect": true
        });
    }
}

/* ================================== */
/* 5. Event Listener Principal
/* ================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa Carrossel
    initCarousel();
    
    // Inicializa Partículas
    initParticles();

    // Configura Eventos dos Botões de Idioma
    document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Define o idioma inicial (Português, baseado no HTML)
    setLanguage('pt');
});