document.getElementById('icono-claro-oscuro').addEventListener('click', function() {
    document.body.classList.toggle('oscuro');
    const icono = document.getElementById('icono-claro-oscuro');
    if (document.body.classList.contains('oscuro')) {
        icono.style.fill = '#fff';
    } else {
        icono.style.fill = '#000';
    }
});

const translation = {
    en: {
        titulo: "Cross-Platform Development Student",
        nav_acerca: "About Me",
        nav_proyectos: "Projects",
        nav_herramientas: "Tools",
        nav_habilidades: "Skills",
        nav_formacion: "Education and Certifications",
        nav_experiencia: "Experience",
        desc_cv:"Download Resume",
        
        // About Me
        acerca: "About Me",
        acerca_texto: "I am a Cross-Platform Developer student with a strong interest in technology, innovation, and software development. I am motivated by applying programming and IT to solve problems. I stand out for my ability to learn quickly, adaptability, and previous experience in training and teamwork in international environments.",
        
        // Projects
        seccion_proy: "Projects",
        
        // Tools
        seccion_herr: "Tools",
        herr_leng: "Programming Languages",
        seccion_des: "Web Development",
        seccion_bbdd: "Databases and DBMS",
        seccion_devops: "DevOps and Tools",
        seccion_ot: "Others",
        
        // Skills
        hab_titulo: "Skills",
        hab_texto: `- Object-oriented programming
- Responsive web development
- Management of relational and NoSQL databases
- Working in agile environments
- Management and logistics (in international settings)
- Training and mentoring
- Effective communication (multilingual)
- Multicultural teamwork`,
        
        // Education and Certifications
        formacion_titulo: "Education and Certifications",
        f1t: "Higher Education",
        f1s: "09/2024 - Ongoing | Multiplatform Application Development • IES El Lago",
        f1p1: "Programming (Java, Python, Kotlin, PHP), Web Development (HTML, CSS, JavaScript), Databases: SQL and NoSQL (Oracle, MySQL, MongoDB, Cassandra), Networking Systems, Cloud Services (AWS, GoogleCloud, Azure), Git and GitHub, Docker, OS Management, Enterprise Management Systems.",
        f2t: "High School in Economics",
        f2s: "2007 to 2014 | Basic Technician in Organizational Management • Escuela Superior de Comercio Manuel Belgrano",
        f2p1: "Training in commerce, administration, organizational management, and accounting records.",
        f3t: "English Certification",
        f3p: "English test 84/100 - C2 Proficient",
        f4t: "Python Certification",
        f4p1: "Python for Everybody - www.py4e.com",
        f4p2: "Introduction to programming with Python 3 focused on Object-Oriented Programming.",
        
        // Experience
        experiencia_titulo: "Experience",
        e1t: "Training and Problem Solving",
        e1s: "2023 | Amazon FC HAJ1 (Germany)",
        e1p1: "Highly digitized and automated environment, with daily use of internal systems and IT tools.",
        e1p2: "Employee training: I trained a large part of the team in my logistics area, improving the efficiency of the area with staff capable of working autonomously.",
        e1p3: "Quality control, inventory control, and solving logistical problems. Managed the area and personnel, achieving and even exceeding expected metrics.",
        e2t: "Customer Service and Sales",
        e2s: "2022 | Magic Memories (Camp Nou, Barcelona, Spain)",
        e2p1: "Tourist reception and assistance in multiple languages. Photo taking and editing, cash handling, and public sales.",
        e3t: "Promoter (F2F)",
        e3s: "2022 | Fundraisers We Are S.L. (Barcelona, Spain)",
        e3p1: "NGO promoter and member recruitment (F2F).",
        e3p2: "Assistance in training new recruiters.",
        e4t: "Logistics Operator (FC Associate 1)",
        e4s: "2020 to 2021 | Amazon FC HAM2 (Germany)",
        e4p1: "Solving logistical, inventory, quality, and item classification issues. Supported the team with priority packages.",
        e5t: "Telemarketing",
        e5s: "2017 | CHEXA S.A. (Córdoba, Argentina)",
        e5p1: "Direct sales and financing advice for Chevrolet and Peugeot vehicles.",
        e5p2: "Managed my own client portfolio and social media marketing campaigns."
    },
    es: {
        titulo: "Estudiante en Desarrollo de Aplicaciones Multiplataforma",
        nav_acerca:"Sobre mí",
        nav_proyectos: "Proyectos",
        nav_herramientas: "Herramientas",
        nav_habilidades: "Habilidades",
        nav_formacion: "Formación y Certificados",
        nav_experiencia: "Experiencia",
        desc_cv:"Descargar CV",
        // Sobre mí
        acerca: "Sobre mí",
        acerca_texto: "Soy estudiante de Desarrollo de Aplicaciones Multiplataforma, con fuerte interés en la tecnología, la innovación y el desarrollo de software. Me motiva aplicar la programación y la informática en la resolución de problemas. Destaco por mi capacidad de aprendizaje rápido, adaptabilidad y experiencia previa en capacitación y trabajo en equipo en entornos internacionales.",
        
        // Proyectos
        seccion_proy: "Proyectos",
        
        // Herramientas
        seccion_herr: "Herramientas",
        herr_leng: "Lenguajes de Programación",
        seccion_des: "Desarrollo Web",
        seccion_bbdd: "Bases de Datos y SGBD",
        seccion_devops: "DevOps y Herramientas",
        seccion_ot: "Otros",
        
        // Habilidades
        hab_titulo: "Habilidades",
        hab_texto: `- Programación orientada a objetos
- Desarrollo web responsive
- Manejo de bases de datos relacionales y NoSQL
- Trabajo en entornos ágiles
- Gestión y logística (en entornos internacionales)
- Capacitación y mentoring
- Comunicación efectiva (multilingüe)
- Trabajo en equipo multicultural`,

        // Formación y Certificados
        formacion_titulo: "Formación y Certificados",
        f1t: "Formación Superior",
        f1s: "09/2024 - En curso | Desarrollo de Aplicaciones Multiplataforma • IES El lago",
        f1p1: "Programación (Java, Python, Kotlin, PHP), Desarrollo web (HTML, CSS, JavaScript), Bases de datos: SQL y NoSQL (Oracle, MySQL, MongoDB, Cassandra), Sistemas en Redes, Servicios en la Nube (AWS, GoogleCloud, Azure), Git y GitHub, Docker, Gestión de SOs, Sistemas de gestión Empresarial.",
        f2t: "Bachillerato en Economía",
        f2s: "2007 a 2014 | Técnico básico en gestión organizacional • Escuela Superior de Comercio Manuel Belgrano",
        f2p1: "Formación en comercio, administración, gestión organizacional, y registro contable.",
        f3t: "Certificación de Inglés",
        f3p: "English test 84/100 - C2 Proficient",
        f4t: "Curso de Python",
        f4p1: "Python for everybody - www.py4e.com",
        f4p2: "Introducción a la programación con Python 3 enfocado en Programación Orientada a Objetos.",
        
        // Experiencia
        experiencia_titulo: "Experiencia",
        e1t: "Capacitación y Resolución de problemas",
        e1s: "2023 | Amazon FC HAJ1 (Alemania)",
        e1p1: "Entorno altamente digitalizado y automatizado, con uso diario de sistemas internos y herramientas informáticas.",
        e1p2: "Capacitación de empleados: capacité a gran parte del equipo de mi área logística, fortaleciendo la eficiencia del área con personal apto para trabajar de manera autónoma.",
        e1p3: "Control de calidad, control de inventario y resolución de problemas logísticos. Gestioné área y personal alcanzando y hasta superando las métricas esperadas.",
        e2t: "Atención al cliente y ventas",
        e2s: "2022 |Magic Memories (Camp Nou, Barcelona, España)",
        e2p1: "Atención y recibimiento turístico en múltiples idiomas. Toma y edición de fotos, manejo de caja y venta al público.",
        e3t: "Promotor (F2F)",
        e3s: "2022 | Fundraisers We Are S.L. (Barcelona, España)",
        e3p1: "Promotor de ONGs, y captación de socios (F2F).",
        e3p2: "Asistencia en formación de nuevos captadores.",
        e4t: "Operador Logístico (FC Associate 1)",
        e4s: "2020 a 2021 | Amazon FC HAM2 (Alemania)",
        e4p1: "Resolución de problemas logísticos, de inventario, calidad y clasificación de artículos. Soporte al equipo para paquetes prioritarios.",
        e5t: "Telemarketing",
        e5s: "2017 | CHEXA S.A. (Córdoba, Argentina)",
        e5p1: "Venta directa y asesoramiento de financiación en vehículos de las marcas Chevrolet y Peugeot.",
        e5p2: "Manejo de cartera de clientes propia, y campañas de marketing en Redes Sociales."
    }
}

document.querySelectorAll('.idioma img').forEach(img => {
    img.addEventListener('click', function () {
        const lang = img.src.includes('spain-logo.png') ? 'es' : 'en';
        applyTranslation(lang);
    });
});

function applyTranslation(lang) {
    const elementsToTranslate = {
        titulo: document.getElementById('titulo'),
        nav_acerca: document.getElementById('nav_acerca'),
        nav_proyectos: document.getElementById('nav_proyectos'),
        nav_herramientas: document.getElementById('nav_herramientas'),
        nav_habilidades: document.getElementById('nav_habilidades'),
        nav_formacion: document.getElementById('nav_formacion'),
        nav_experiencia: document.getElementById('nav_experiencia'),
        desc_cv: document.getElementById('desc_cv'),
        acerca: document.getElementById('acerca'),
        acerca_texto: document.getElementById('acerca_texto'),
        seccion_proy: document.getElementById('seccion_proy'),
        seccion_herr: document.getElementById('seccion_herr'),
        herr_leng: document.getElementById('herr_leng'),
        seccion_des: document.getElementById('seccion_des'),
        seccion_bbdd: document.getElementById('seccion_bbdd'),
        seccion_devops: document.getElementById('seccion_devops'),
        seccion_ot: document.getElementById('seccion_ot'),
        hab_titulo: document.getElementById('hab_titulo'),
        hab_texto: document.getElementById('hab_texto'),
        formacion_titulo: document.getElementById('formacion_titulo'),
        f1t: document.getElementById('f1t'),
        f1s: document.getElementById('f1s'),
        f1p1: document.getElementById('f1p1'),
        f2t: document.getElementById('f2t'),
        f2s: document.getElementById('f2s'),
        f2p1: document.getElementById('f2p1'),
        f3t: document.getElementById('f3t'),
        f3p: document.getElementById('f3p'),
        f4t: document.getElementById('f4t'),
        f4p1: document.getElementById('f4p1'),
        f4p2: document.getElementById('f4p2'),
        experiencia_titulo: document.getElementById('experiencia_titulo'),
        e1t: document.getElementById('e1t'),
        e1s: document.getElementById('e1s'),
        e1p1: document.getElementById('e1p1'),
        e1p2: document.getElementById('e1p2'),
        e1p3: document.getElementById('e1p3'),
        e2t: document.getElementById('e2t'),
        e2s: document.getElementById('e2s'),
        e2p1: document.getElementById('e2p1'),
        e3t: document.getElementById('e3t'),
        e3s: document.getElementById('e3s'),
        e3p1: document.getElementById('e3p1'),
        e3p2: document.getElementById('e3p2'),
        e4t: document.getElementById('e4t'),
        e4s: document.getElementById('e4s'),
        e4p1: document.getElementById('e4p1'),
        e5t: document.getElementById('e5t'),
        e5s: document.getElementById('e5s'),
        e5p1: document.getElementById('e5p1'),
        e5p2: document.getElementById('e5p2')
    };

    for (const key in elementsToTranslate) {
        if (elementsToTranslate[key]) {
            elementsToTranslate[key].textContent = translation[lang][key];
        }
    }
}