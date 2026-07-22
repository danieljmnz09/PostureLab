
let idioma = "es";

const btn = document.getElementById("btnIdioma");

btn.addEventListener("click", () => {

    if (idioma === "es") {

        idioma = "en";
        btn.innerHTML = "🇪🇸 Español";

        // HERO
        document.getElementById("heroTitulo").textContent = "PostureLab";

        document.getElementById("heroTexto").textContent =
            "An intelligent platform that uses Artificial Intelligence to evaluate a person's posture in real time and provide ergonomic recommendations.";

        document.getElementById("heroBoton").textContent =
            "Learn More";

        // PROYECTO
        document.getElementById("tituloProyecto").textContent =
            "What is PostureLab?";

        document.getElementById("textoProyecto").textContent =
            "PostureLab is an intelligent platform that analyzes a person's posture using computer vision and Artificial Intelligence. The system detects poor posture, provides ergonomic recommendations and stores the user's evaluation history.";

        // TÍTULOS
        document.getElementById("tituloProblema").textContent =
            "Problem";

        document.getElementById("tituloFuncionamiento").textContent =
            "How does it work?";

        document.getElementById("tituloTecnologias").textContent =
            "Technologies Used";

        document.getElementById("tituloBeneficios").textContent =
            "Benefits";

        // TARJETAS DEL PROBLEMA
        document.getElementById("problema1Titulo").textContent =
            "Long working hours";

        document.getElementById("problema1Texto").textContent =
            "Many people spend more than 8 hours in front of a computer.";

        document.getElementById("problema2Titulo").textContent =
            "Poor posture habits";

        document.getElementById("problema2Texto").textContent =
            "Poor posture can cause back, neck and shoulder pain.";

        document.getElementById("problema3Titulo").textContent =
            "Prevention";

        document.getElementById("problema3Texto").textContent =
            "Detecting poor posture early helps prevent musculoskeletal injuries.";

    }

    else {

        idioma = "es";
        btn.innerHTML = "🇺🇸 English";

        // HERO
        document.getElementById("heroTitulo").textContent = "PostureLab";

        document.getElementById("heroTexto").textContent =
            "Plataforma inteligente que utiliza Inteligencia Artificial para evaluar la postura de una persona en tiempo real y entregar recomendaciones ergonómicas.";

        document.getElementById("heroBoton").textContent =
            "Conocer Proyecto";

        // PROYECTO
        document.getElementById("tituloProyecto").textContent =
            "¿Qué es PostureLab?";

        document.getElementById("textoProyecto").textContent =
            "PostureLab es una plataforma que analiza la postura de una persona utilizando visión por computadora e Inteligencia Artificial. El sistema detecta malas posturas, entrega recomendaciones ergonómicas y almacena el historial de evaluaciones para ayudar a mejorar los hábitos posturales.";

        // TÍTULOS
        document.getElementById("tituloProblema").textContent =
            "Problema";

        document.getElementById("tituloFuncionamiento").textContent =
            "¿Cómo funciona?";

        document.getElementById("tituloTecnologias").textContent =
            "Tecnologías Utilizadas";

        document.getElementById("tituloBeneficios").textContent =
            "Beneficios";

        // TARJETAS DEL PROBLEMA
        document.getElementById("problema1Titulo").textContent =
            "Largas jornadas";

        document.getElementById("problema1Texto").textContent =
            "Muchas personas permanecen más de 8 horas frente al computador.";

        document.getElementById("problema2Titulo").textContent =
            "Malos hábitos";

        document.getElementById("problema2Texto").textContent =
            "Una postura incorrecta puede provocar dolores de espalda, cuello y hombros.";

        document.getElementById("problema3Titulo").textContent =
            "Prevención";

        document.getElementById("problema3Texto").textContent =
            "Detectar malas posturas a tiempo ayuda a prevenir lesiones musculoesqueléticas.";

    }

});