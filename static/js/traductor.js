let idioma = "es";

const btn = document.getElementById("btnIdioma");

btn.addEventListener("click", () => {

    if (idioma === "es") {

        idioma = "en";
        btn.innerHTML = "🇪🇸 Español";

        // BENEFICIOS
        tituloBeneficios.textContent = "Benefits";

        beneficio1.textContent = "✔ Detects poor posture in real time.";

        beneficio2.textContent = "✔ Provides ergonomic recommendations.";

        beneficio3.textContent = "✔ Stores evaluation history.";

        beneficio4.textContent = "✔ Low-cost hardware.";

        beneficio5.textContent = "✔ Easy implementation.";


        // APLICACIONES

        tituloAplicaciones.textContent = "Applications";

        textoAplicaciones.innerHTML = `
• Offices<br>
• Students<br>
• Programmers<br>
• Remote work<br>
• Gamers<br>
• Companies
`;


        // FOOTER

        footerSubtitulo.textContent =
            "Intelligent Posture Assessment Platform";

        footerEquipo.textContent =
            "Team: Daniel Jiménez, Sergio Bustos, Camilo Díaz, Martin Rojas, Benjamin Delgado";

        footerFeria.textContent =
            "TP Fair • 2026";

        // NAVBAR
        document.getElementById("navProyecto").textContent = "Project";

        document.getElementById("navFuncionamiento").textContent = "How it Works";

        document.getElementById("navTecnologias").textContent = "Technologies";

        document.getElementById("navBeneficios").textContent = "Benefits";

        // ================= HERO =================

        heroTitulo.textContent = "PostureLab";

        heroTexto.textContent =
            "An intelligent platform that uses Artificial Intelligence to evaluate posture in real time and provide ergonomic recommendations.";

        heroBoton.textContent = "Learn More";

        // ================= PROYECTO =================

        tituloProyecto.textContent = "What is PostureLab?";

        textoProyecto.textContent =
            "PostureLab is an intelligent platform that analyzes posture using computer vision and Artificial Intelligence. It detects poor posture, provides ergonomic recommendations and stores the user's evaluation history.";

        // ================= PROBLEMA =================

        tituloProblema.textContent = "Problem";

        problema1Titulo.textContent = "Long working hours";
        problema1Texto.textContent =
            "Many people spend more than 8 hours in front of a computer.";

        problema2Titulo.textContent = "Poor posture habits";
        problema2Texto.textContent =
            "Poor posture can cause back, neck and shoulder pain.";

        problema3Titulo.textContent = "Prevention";
        problema3Texto.textContent =
            "Detecting poor posture early helps prevent musculoskeletal injuries.";

        // ================= FUNCIONAMIENTO =================

        tituloFuncionamiento.textContent = "How does it work?";

        funcionDescripcion.textContent =
            "The PostureLab process is divided into five main stages.";

        funcion1Titulo.textContent = "1. Capture";
        funcion1Texto.textContent =
            "The camera captures the user's posture in real time.";

        funcion2Titulo.textContent = "2. Detection";
        funcion2Texto.textContent =
            "MediaPipe identifies shoulders, neck and back using computer vision.";

        funcion3Titulo.textContent = "3. Analysis";
        funcion3Texto.textContent =
            "Body angles are calculated to evaluate posture.";

        funcion4Titulo.textContent = "4. Evaluation";
        funcion4Texto.textContent =
            "The system classifies posture using a traffic-light indicator.";

        funcion5Titulo.textContent = "5. History";
        funcion5Texto.textContent =
            "Evaluations are stored so users can monitor their progress.";

    }

    else {

        idioma = "es";
        btn.innerHTML = "🇺🇸 English";

        // BENEFICIOS
        tituloBeneficios.textContent = "Beneficios";

        beneficio1.textContent = "✔ Detecta malas posturas en tiempo real.";

        beneficio2.textContent = "✔ Recomienda mejoras ergonómicas.";

        beneficio3.textContent = "✔ Guarda el historial de evaluaciones.";

        beneficio4.textContent = "✔ Hardware de bajo costo.";

        beneficio5.textContent = "✔ Fácil implementación.";


        // APLICACIONES

        tituloAplicaciones.textContent = "Aplicaciones";

        textoAplicaciones.innerHTML = `
• Oficinas<br>
• Estudiantes<br>
• Programadores<br>
• Teletrabajo<br>
• Gamers<br>
• Empresas
`;


        // FOOTER

        footerSubtitulo.textContent =
            "Plataforma Inteligente de Evaluación Postural";

        footerEquipo.textContent =
            "Equipo: Daniel Jiménez, Sergio Bustos, Camilo Díaz, Martin Rojas, Benjamin Delgado";

        footerFeria.textContent =
            "Feria TP • 2026";
        // NAVBAR
        document.getElementById("navProyecto").textContent = "Proyecto";

        document.getElementById("navFuncionamiento").textContent = "Funcionamiento";

        document.getElementById("navTecnologias").textContent = "Tecnologías";

        document.getElementById("navBeneficios").textContent = "Beneficios";

        // ================= HERO =================

        heroTitulo.textContent = "PostureLab";

        heroTexto.textContent =
            "Plataforma inteligente que utiliza Inteligencia Artificial para evaluar la postura de una persona en tiempo real y entregar recomendaciones ergonómicas.";

        heroBoton.textContent = "Conocer Proyecto";

        // ================= PROYECTO =================

        tituloProyecto.textContent = "¿Qué es PostureLab?";

        textoProyecto.textContent =
            "PostureLab es una plataforma que analiza la postura de una persona utilizando visión por computadora e Inteligencia Artificial. El sistema detecta malas posturas, entrega recomendaciones ergonómicas y almacena el historial de evaluaciones.";

        // ================= PROBLEMA =================

        tituloProblema.textContent = "Problema";

        problema1Titulo.textContent = "Largas jornadas";
        problema1Texto.textContent =
            "Muchas personas permanecen más de 8 horas frente al computador.";

        problema2Titulo.textContent = "Malos hábitos";
        problema2Texto.textContent =
            "Una postura incorrecta puede provocar dolores de espalda, cuello y hombros.";

        problema3Titulo.textContent = "Prevención";
        problema3Texto.textContent =
            "Detectar malas posturas a tiempo ayuda a prevenir lesiones musculoesqueléticas.";

        // ================= FUNCIONAMIENTO =================

        tituloFuncionamiento.textContent = "¿Cómo funciona?";

        funcionDescripcion.textContent =
            "El proceso de PostureLab se divide en cinco etapas principales.";

        funcion1Titulo.textContent = "1. Captura";
        funcion1Texto.textContent =
            "La cámara registra la postura del usuario en tiempo real.";

        funcion2Titulo.textContent = "2. Detección";
        funcion2Texto.textContent =
            "MediaPipe identifica hombros, cuello y espalda mediante visión artificial.";

        funcion3Titulo.textContent = "3. Análisis";
        funcion3Texto.textContent =
            "Se calculan los ángulos corporales para evaluar la postura.";

        funcion4Titulo.textContent = "4. Evaluación";
        funcion4Texto.textContent =
            "El sistema clasifica la postura utilizando un semáforo ergonómico.";

        funcion5Titulo.textContent = "5. Historial";
        funcion5Texto.textContent =
            "Se almacenan las evaluaciones para observar la evolución del usuario.";

    }

});