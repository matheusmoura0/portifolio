document.addEventListener('DOMContentLoaded', () => {
    // --- Particles Config ---
    const initParticles = (isDark) => {
        const color = isDark ? '#ffffff' : '#1e293b'; // White particles on dark, Slate on light
        const opacity = isDark ? 0.1 : 0.2; // Slightly more visible on light
        
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": color },
                "shape": { "type": "circle" },
                "opacity": { "value": opacity, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": color, "opacity": opacity, "width": 1 },
                "move": { "enable": true, "speed": 2, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } } }
            },
            "retina_detect": true
        });
    };

    // --- Theme Switcher Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.icon');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }
    
    // Initialize particles based on initial theme
    initParticles(document.documentElement.getAttribute('data-theme') === 'dark');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme;
        
        if (currentTheme === 'dark') {
            newTheme = 'light';
            themeIcon.textContent = '🌙';
        } else {
            newTheme = 'dark';
            themeIcon.textContent = '☀️';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Refresh particles with new theme colors
        initParticles(newTheme === 'dark');
    });

    // --- Language Switcher Logic ---
    const translations = {
        pt: {
            menuSobre: "Sobre",
            menuHabilidades: "Skills",
            menuProjetos: "Projetos",
            menuContato: "Contato",
            heroSaudacao: "Olá, eu sou",
            tituloProfissao: "Desenvolvedor Full Stack",
            heroDesc: "Transformando ideias em experiências digitais robustas e modernas.",
            heroBtnProjetos: "Ver Projetos",
            heroBtnContato: "Contato",
            sobreTitulo: "Sobre Mim",
            sobreTexto: "Desenvolvedor Full-Stack com sólida experiência em Ruby on Rails e grande interesse em tecnologias front-end modernas como React e Node.js. Busco unir a robustez do back-end com o dinamismo do front-end para construir soluções completas e de alta qualidade. Sou fluente em inglês (nível C1).",
            habilidadesTitulo: "Tecnologias",
            projetosTitulo: "Projetos em Destaque",
            projeto1Desc: "Aplicação web para pesquisar filmes, adicionar aos favoritos e compartilhar a lista com um link exclusivo.",
            projeto2Desc: "Gerenciador de ordens de serviço, clientes e colaboradores, construído com React, Node.js e MaterialUI.",
            projeto3Desc: "Uma API simples de produtos desenvolvida com Go (Golang) e containerizada com Docker.",
            experienciaTitulo: "Experiência e Formação",
            exp1Titulo: "Desenvolvedor Full Stack na Humanoide",
            exp1Descricao: "Atuação em projetos com Ruby on Rails, incluindo desenvolvimento Full Stack com Slim e criação de APIs focadas em back-end.",
            exp2Titulo: "Formação Fullstack na Trybe",
            exp2Descricao: "Mais de 1.500 horas de formação em front-end, back-end, ciência da computação e metodologias ágeis.",
            exp3Titulo: "Curso Avançado Fullcycle 3.0",
            exp3Data: "Em andamento",
            exp3Descricao: "Aprofundamento em arquitetura de software, microsserviços, mensageria, DevOps e CI/CD.",
            contatoTitulo: "Vamos Trabalhar Juntos?",
            contatoSubtitulo: "Estou sempre aberto a novos desafios e parcerias.",
            contatoEmail: "Email"
        },
        en: {
            menuSobre: "About",
            menuHabilidades: "Skills",
            menuProjetos: "Projects",
            menuContato: "Contact",
            heroSaudacao: "Hello, I am",
            tituloProfissao: "Full Stack Developer",
            heroDesc: "Transforming ideas into robust and modern digital experiences.",
            heroBtnProjetos: "View Projects",
            heroBtnContato: "Contact",
            sobreTitulo: "About Me",
            sobreTexto: "Full-Stack Developer with solid experience in Ruby on Rails and great interest in modern front-end technologies like React and Node.js. I seek to combine back-end robustness with front-end dynamism to build complete, high-quality solutions. Fluent in English (C1 level).",
            habilidadesTitulo: "Technologies",
            projetosTitulo: "Featured Projects",
            projeto1Desc: "Web application to search movies, add to favorites, and share the list with a unique link.",
            projeto2Desc: "Service order, client, and employee manager built with React, Node.js, and MaterialUI.",
            projeto3Desc: "A simple product API developed with Go (Golang) and containerized with Docker.",
            experienciaTitulo: "Experience & Education",
            exp1Titulo: "Full Stack Developer at Humanoide",
            exp1Descricao: "Working on Ruby on Rails projects, including Full Stack development with Slim and creating back-end focused APIs.",
            exp2Titulo: "Fullstack Formation at Trybe",
            exp2Descricao: "Over 1,500 hours of training in front-end, back-end, computer science, and agile methodologies.",
            exp3Titulo: "Advanced Fullcycle 3.0 Course",
            exp3Data: "In Progress",
            exp3Descricao: "Deep diving into software architecture, microservices, messaging, DevOps, and CI/CD.",
            contatoTitulo: "Let's Work Together?",
            contatoSubtitulo: "I am always open to new challenges and partnerships.",
            contatoEmail: "Email"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active class
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get selected language
            const lang = btn.id === 'lang-pt' ? 'pt' : 'en';

            // Update text content
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Account for fixed header offset
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});