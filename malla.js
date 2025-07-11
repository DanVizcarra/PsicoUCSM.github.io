const cursos = [

  //Semestre 1  
  { id: "Neurociencia del Comportamiento", nombre: "Neurociencia del Comportamiento", prereqs: [], semestre: 1, creditos: 4},
  { id: "Psicología del Desarrollo Infantil", nombre: "Psicología del Desarrollo Infantil", prereqs: [], semestre: 1, creditos: 3},
  { id: "Introducción a la Psicología", nombre: "Introducción a la Psicología", prereqs: [], semestre: 1, creditos: 3},
  { id: "Ciencias Histórico Sociales", nombre: "Ciencias Histórico Sociales", prereqs: [], semestre: 1, creditos: 3},
  { id: "Taller de Coaching y Liderazgo", nombre: "Taller de Coaching y Liderazgo", prereqs: [], semestre: 1, creditos: 2},
  { id: "Taller de Lectura y Redacción", nombre: "Taller de Lectura y Redacción", prereqs: [], semestre: 1, creditos: 2},

  //Semestre 2
  { id: "Psicología del Desarrollo Adolescencia y Adultez", nombre: "Psicología del Desarrollo Adolescencia y Adultez", prereqs: ["Psicología del Desarrollo Infantil"], semestre: 2, creditos: 4},
  { id: "Identidad y Peruanidad", nombre: "Identidad y Peruanidad", prereqs: [], semestre: 2, creditos: 3},
  { id: "NeuroPsicología", nombre: "Neuropsicología", prereqs: ["Neurociencia del Comportamiento"], semestre: 2, creditos: 5},
  { id: "Pruebas Psicológicas", nombre: "Pruebas Psicológicas", prereqs: [], semestre: 2, creditos: 5},
  { id: "Taller de Argumentación", nombre: "Taller de Argumentación", prereqs: [], semestre: 2, creditos: 2},
  { id: "Taller de Artes", nombre: "Taller de Artes", prereqs: [], semestre: 2, creditos: 1},
 
//Semestre 3
  { id: "Psicología Social", nombre: "Psicología Social", prereqs: [], semestre: 3, creditos: 4},
  { id: "Psicología del Aprendizaje", nombre: "Psicología del Aprendizaje", prereqs: [], semestre: 3, creditos: 4},
  { id: "Antropología Cultural", nombre: "Antropología Cultural", prereqs: [], semestre: 3, creditos: 3},
  { id: "Taller de Deportes", nombre: "Taller de Deportes", prereqs: [], semestre: 3, creditos: 1},
  { id: "Investigación Psicológica", nombre: "Investigación Psicológica", prereqs: [], semestre: 3, creditos: 4},
  { id: "Taller de Entornos Virtuales en Ciencias Sociales", nombre: "Taller de Entornos Virtuales en Ciencias Sociales", prereqs: [], semestre: 3, creditos: 2},
  { id: "Inglés", nombre: "Inglés", prereqs: [], semestre: 3, creditos: 2},

//Semestre 4
  { id: "Psicoestadística", nombre: "Psicoestadística", prereqs: [], semestre: 4, creditos: 4},
  { id: "Psicología del Bienestar", nombre: "Psicología del Bienestar", prereqs: [], semestre: 4, creditos: 4},
  { id: "Ciberpsicología", nombre: "Ciberpsicología", prereqs: [], semestre: 4, creditos: 4},
  { id: "Diseños no Experimentales en Psicología", nombre: "Diseños no Experimentales en Psicología", prereqs: ["Investigación Psicológica"], semestre: 4, creditos: 4},
  { id: "Realidad Regional y Local", nombre: "Realidad Regional y Local", prereqs: [], semestre: 4, creditos: 3,},
  { id: "Taller de Responsabilidad Social", nombre: "Taller de Responsabilidad Social", prereqs: [], semestre: 4, creditos: 2},
  { id: "Responsabilidad Ciudadanía y Ecologíca", nombre: "Responsabilidad Ciudadanía y Ecologíca", prereqs: [], semestre: 4, creditos: 3},

//Semestre 5
  { id: "Psicología de la Comunicación", nombre: "Psicología de la Comunicación", prereqs: [], semestre: 5, creditos: 3},
  { id: "Psicología de la Personalidad", nombre: "Psicología de la Personalidad", prereqs: [], semestre: 5, creditos: 3},
  { id: "Psicología Experimental", nombre: "Psicología Experimental", prereqs: [], semestre: 5, creditos: 4},
  { id: "Construcción de Pruebas Psicológicas", nombre: "Construcción de Pruebas Psicológicas", prereqs: ["Psicoestadística"], semestre: 5, creditos: 4},
  { id: "Gestión de la Intervención Social", nombre: "Gestión de la Intervención Social", prereqs: [], semestre: 5, creditos: 3},
  { id: "Sexualidad Humana", nombre: "Sexualidad Humana", prereqs: [], semestre: 5, creditos: 3},

//Semestre 6
  { id: "Psicología Organizacional", nombre: "Psicología Organizacional", prereqs: [], semestre: 6, creditos: 4},
  { id: "Psicología Educativa", nombre: "Psicología Educativa", prereqs: [], semestre: 6, creditos: 4},
  { id: "Psicología Anormal", nombre: "Psicología Anormal", prereqs: [], semestre: 6, creditos: 4},
  { id: "Psicología Comunitaria", nombre: "Psicología Comunitaria", prereqs: [], semestre: 6, creditos: 4},
  { id: "Filosofia y Ética", nombre: "Filosofia y Ética", prereqs: [], semestre: 6, creditos: 3},
  { id: "Psicoanálisis Contemporáneo", nombre: "Psicoanálisis Contemporáneo", prereqs: [], semestre: 6, creditos: 1},
  { id: "Psicología del Deporte", nombre: "Psicología del Deporte", prereqs: [], semestre: 6, creditos: 1},

//Semestre 7
  { id: "Psicología Clínica y de la Salud", nombre: "Psicologia Clínica y de la Salud", prereqs: ["Psicología Anormal"], semestre: 7, creditos: 4},
  { id: "Consejería Psicológica y de la Salud", nombre: "Consejería Psicológica y de la Salud", prereqs: ["Psicología Anormal"], semestre: 7, creditos: 4},
  { id: "Psicología Familiar", nombre: "Psicología Familiar", prereqs: [], semestre: 7, creditos: 4},
  { id: "Intervención Psicoeducativa", nombre: "Intervención Psicoeducativa", prereqs: ["Psicología Educativa"], semestre: 7, creditos: 4},
  { id: "Gestión del Talento en la Organización", nombre: "Gestión del Talento en la Organización", prereqs: ["Psicología Organizacional"], semestre: 7, creditos: 4},

//Semestre 8
  { id: "Psicología Forense", nombre: "Psicología Forense", prereqs: ["Psicología Clínica y de la Salud"], semestre: 8, creditos: 3},
  { id: "Psicología Social Aplicada", nombre: "Psicología Social Aplicada", prereqs: ["Psicología Comunitaria"], semestre: 8, creditos: 4},
  { id: "Psicoterapia", nombre: "Psicoterapia", prereqs: [], semestre: 8, creditos: 4},
  { id: "Orientación Vocacional y Profesional", nombre: "Orientación Vocacional y Profesional", prereqs: ["Intervención Psicoeducativa"], semestre: 8, creditos: 4},
  { id: "Psicología Económica y del Consumidor", nombre: "Psicología Económica y del Consumidor", prereqs: ["Psicología Organizacional"], semestre: 8, creditos: 3},
  { id: "Gestión de Conflictos Psicosociales", nombre: "Gestión de Conflictos Psicosociales", prereqs: [], semestre: 8, creditos: 2},
  { id: "Promoción del Desarrollo de Habilidades Socio-Cognitivas", nombre: "Promoción del Desarrollo de Habilidades Socio-Cognitivas", prereqs: [], semestre: 8, creditos: 2},
  { id: "Psicología de la Salud y Seguridad en el Trabajo", nombre: "Psicología de la Salud y Seguridad en el Trabajo", prereqs: [], semestre: 8, creditos: 2},
  { id: "Técnicas de Observación y Entrevista en Psicología", nombre: "Técnicas de Observación y Entrevista en Psicología", prereqs: [], semestre: 8, creditos: 2},

//Semestre 9
  { id: "Coaching Psicológico", nombre: "Coaching Psicológico", prereqs: [], semestre: 9, creditos: 2},
  { id: "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", nombre: "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", prereqs: [], semestre: 9, creditos: 2},
  { id: "Práctica Preprofesional de Psicología Educativa", nombre: "Práctica Prepofesional de Psicología Educativa", prereqs: [], semestre: 9, creditos: 8, requiereCreditos: 160},
  { id: "Práctica Preprofesional de Psicología Organizacional", nombre: "Práctica Preprofesional de Psicología Organizacional", prereqs: [], semestre: 9, creditos: 8, requiereCreditos: 160},
  { id: "Prevención de Conductas de Riesgo en el Aula", nombre: "Prevención de Conductas de Riesgo en el Aula", prereqs: [], semestre: 9, creditos: 2},
  { id: "Técnicas de Evaluación en Psicología Clínica", nombre: "Técnicas de Evaluación en Psicología Clínica", prereqs: [], semestre: 9, creditos: 2},

//Semestre 10
  { id: "Prácticas Preprofesionales de Psicología y de la Salud", nombre: "Prácticas Preprofesionales de Psicología y de la Salud", prereqs: ["Neurociencia del Comportamiento", "Psicología del Desarrollo Infantil", "Introducción a la Psicología", "Ciencias Histórico Sociales", "Taller de Coaching y Liderazgo", "Taller de Lectura y Redacción", "Psicología del Desarrollo Adolescencia y Adultez", "Identidad y Peruanidad", "NeuroPsicología", "Pruebas Psicológicas", "Taller de Argumentación", "Taller de Artes", "Psicología Social", "Psicología del Aprendizaje", "Antropología Cultural", "Taller de Deportes", "Investigación Psicológica", "Taller de Entornos Virtuales en Ciencias Sociales", "Inglés", "Psicoestadística", "Psicología del Bienestar", "Ciberpsicología", "Diseños no Experimentales en Psicología", "Realidad Regional y Local", "Taller de Responsabilidad Social", "Responsabilidad Ciudadanía y Ecologíca", "Psicología de la Comunicación", "Psicología de la Personalidad", "Psicología Experimental", "Construcción de Pruebas Psicológicas", "Gestión de la Intervención Social", "Sexualidad Humana", "Psicología Organizacional", "Psicología Educativa", "Psicología Anormal", "Psicología Comunitaria", "Filosofia y Ética", "Psicoanálisis Contemporáneo", "Psicología del Deporte", "Psicología Clínica y de la Salud", "Consejería Psicológica y de la Salud", "Psicología Familiar", "Intervención Psicoeducativa", "Gestión del Talento en la Organización", "Psicología Forense", "Psicología Social Aplicada", "Psicoterapia", "Orientación Vocacional y Profesional", "Psicología Económica y del Consumidor", "Gestión de Conflictos Psicosociales", "Promoción del Desarrollo de Habilidades Socio-Cognitivas", "Psicología de la Salud y Seguridad en el Trabajo", "Técnicas de Observación y Entrevista en Psicología", "Coaching Psicológico", "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", "Práctica Preprofesional de Psicología Educativa", "Práctica Preprofesional de Psicología Organizacional", "Prevención de Conductas de Riesgo en el Aula", "Técnicas de Evaluación en Psicología Clínica"], semestre: 10, creditos: 2},
  { id: "Competencias Profesionales y de Empleabilidad en Psicología", nombre: "Competencias Profesionales y de Empleabilidad en Psicología", prereqs: ["Neurociencia del Comportamiento", "Psicología del Desarrollo Infantil", "Introducción a la Psicología", "Ciencias Histórico Sociales", "Taller de Coaching y Liderazgo", "Taller de Lectura y Redacción", "Psicología del Desarrollo Adolescencia y Adultez", "Identidad y Peruanidad", "NeuroPsicología", "Pruebas Psicológicas", "Taller de Argumentación", "Taller de Artes", "Psicología Social", "Psicología del Aprendizaje", "Antropología Cultural", "Taller de Deportes", "Investigación Psicológica", "Taller de Entornos Virtuales en Ciencias Sociales", "Inglés", "Psicoestadística", "Psicología del Bienestar", "Ciberpsicología", "Diseños no Experimentales en Psicología", "Realidad Regional y Local", "Taller de Responsabilidad Social", "Responsabilidad Ciudadanía y Ecologíca", "Psicología de la Comunicación", "Psicología de la Personalidad", "Psicología Experimental", "Construcción de Pruebas Psicológicas", "Gestión de la Intervención Social", "Sexualidad Humana", "Psicología Organizacional", "Psicología Educativa", "Psicología Anormal", "Psicología Comunitaria", "Filosofia y Ética", "Psicoanálisis Contemporáneo", "Psicología del Deporte", "Psicología Clínica y de la Salud", "Consejería Psicológica y de la Salud", "Psicología Familiar", "Intervención Psicoeducativa", "Gestión del Talento en la Organización", "Psicología Forense", "Psicología Social Aplicada", "Psicoterapia", "Orientación Vocacional y Profesional", "Psicología Económica y del Consumidor", "Gestión de Conflictos Psicosociales", "Promoción del Desarrollo de Habilidades Socio-Cognitivas", "Psicología de la Salud y Seguridad en el Trabajo", "Técnicas de Observación y Entrevista en Psicología", "Coaching Psicológico", "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", "Práctica Preprofesional de Psicología Educativa", "Práctica Preprofesional de Psicología Organizacional", "Prevención de Conductas de Riesgo en el Aula", "Técnicas de Evaluación en Psicología Clínica"], semestre: 10, creditos: 1},
  { id: "Prácticas Preprofesionales de Psicología Social Comunitaria", nombre: "Prácticas Preprofesionales de Psicología Social Comunitaria", prereqs: ["Neurociencia del Comportamiento", "Psicología del Desarrollo Infantil", "Introducción a la Psicología", "Ciencias Histórico Sociales", "Taller de Coaching y Liderazgo", "Taller de Lectura y Redacción", "Psicología del Desarrollo Adolescencia y Adultez", "Identidad y Peruanidad", "NeuroPsicología", "Pruebas Psicológicas", "Taller de Argumentación", "Taller de Artes", "Psicología Social", "Psicología del Aprendizaje", "Antropología Cultural", "Taller de Deportes", "Investigación Psicológica", "Taller de Entornos Virtuales en Ciencias Sociales", "Inglés", "Psicoestadística", "Psicología del Bienestar", "Ciberpsicología", "Diseños no Experimentales en Psicología", "Realidad Regional y Local", "Taller de Responsabilidad Social", "Responsabilidad Ciudadanía y Ecologíca", "Psicología de la Comunicación", "Psicología de la Personalidad", "Psicología Experimental", "Construcción de Pruebas Psicológicas", "Gestión de la Intervención Social", "Sexualidad Humana", "Psicología Organizacional", "Psicología Educativa", "Psicología Anormal", "Psicología Comunitaria", "Filosofia y Ética", "Psicoanálisis Contemporáneo", "Psicología del Deporte", "Psicología Clínica y de la Salud", "Consejería Psicológica y de la Salud", "Psicología Familiar", "Intervención Psicoeducativa", "Gestión del Talento en la Organización", "Psicología Forense", "Psicología Social Aplicada", "Psicoterapia", "Orientación Vocacional y Profesional", "Psicología Económica y del Consumidor", "Gestión de Conflictos Psicosociales", "Promoción del Desarrollo de Habilidades Socio-Cognitivas", "Psicología de la Salud y Seguridad en el Trabajo", "Técnicas de Observación y Entrevista en Psicología", "Coaching Psicológico", "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", "Práctica Preprofesional de Psicología Educativa", "Práctica Preprofesional de Psicología Organizacional", "Prevención de Conductas de Riesgo en el Aula", "Técnicas de Evaluación en Psicología Clínica"], semestre: 10, creditos: 2},
  { id: "Trabajo de Investigación", nombre: "Trabajo de Investigación", prereqs: ["Neurociencia del Comportamiento", "Psicología del Desarrollo Infantil", "Introducción a la Psicología", "Ciencias Histórico Sociales", "Taller de Coaching y Liderazgo", "Taller de Lectura y Redacción", "Psicología del Desarrollo Adolescencia y Adultez", "Identidad y Peruanidad", "NeuroPsicología", "Pruebas Psicológicas", "Taller de Argumentación", "Taller de Artes", "Psicología Social", "Psicología del Aprendizaje", "Antropología Cultural", "Taller de Deportes", "Investigación Psicológica", "Taller de Entornos Virtuales en Ciencias Sociales", "Inglés", "Psicoestadística", "Psicología del Bienestar", "Ciberpsicología", "Diseños no Experimentales en Psicología", "Realidad Regional y Local", "Taller de Responsabilidad Social", "Responsabilidad Ciudadanía y Ecologíca", "Psicología de la Comunicación", "Psicología de la Personalidad", "Psicología Experimental", "Construcción de Pruebas Psicológicas", "Gestión de la Intervención Social", "Sexualidad Humana", "Psicología Organizacional", "Psicología Educativa", "Psicología Anormal", "Psicología Comunitaria", "Filosofia y Ética", "Psicoanálisis Contemporáneo", "Psicología del Deporte", "Psicología Clínica y de la Salud", "Consejería Psicológica y de la Salud", "Psicología Familiar", "Intervención Psicoeducativa", "Gestión del Talento en la Organización", "Psicología Forense", "Psicología Social Aplicada", "Psicoterapia", "Orientación Vocacional y Profesional", "Psicología Económica y del Consumidor", "Gestión de Conflictos Psicosociales", "Promoción del Desarrollo de Habilidades Socio-Cognitivas", "Psicología de la Salud y Seguridad en el Trabajo", "Técnicas de Observación y Entrevista en Psicología", "Coaching Psicológico", "Habilidades para la Intervención Comunitaria en Contextos Multiculturales", "Práctica Preprofesional de Psicología Educativa", "Práctica Preprofesional de Psicología Organizacional", "Prevención de Conductas de Riesgo en el Aula", "Técnicas de Evaluación en Psicología Clínica"], semestre: 10, creditos: 3}
];

const STORAGE_KEY = "cursosCompletados";

const completados = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function guardarProgreso() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completados]));
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  document.getElementById("resetBtn").onclick = () => {
    if (confirm("¿Seguro que quieres reiniciar tu progreso? Esta acción no se puede deshacer.")) {
      completados.clear();
      guardarProgreso();
      crearMalla();
    }
  };

  const creditosAcumulados = cursos
    .filter(c => completados.has(c.id))
    .reduce((sum, c) => sum + (c.creditos || 0), 0);

  const creditosTexto = document.getElementById("creditosTotales");
  creditosTexto.textContent = `Créditos completados: ${creditosAcumulados}`;

  for (let semestre = 1; semestre <= 10; semestre++) {
    const box = document.createElement("div");
    box.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    box.appendChild(titulo);

    const cursosCont = document.createElement("div");
    cursosCont.className = "cursos-contenedor";

    cursos.filter(c => c.semestre === semestre).forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";

      const tituloCurso = document.createElement("h3");
      tituloCurso.textContent = curso.nombre;
      div.appendChild(tituloCurso);

      const creditos = document.createElement("p");
      creditos.textContent = `Créditos: ${curso.creditos}`;
      div.appendChild(creditos);
      creditos.className = "creditos";

      const estado = document.createElement("p");
      const creditosAcumulados = cursos
        .filter(c => completados.has(c.id))
        .reduce((sum, c) => sum + (c.creditos || 0), 0);

      const cumpleCursos = curso.prereqs.every(pr => completados.has(pr));
      const cumpleCreditos = !curso.requiereCreditos || creditosAcumulados >= curso.requiereCreditos;
      const puedeTomar = cumpleCursos && cumpleCreditos;


      if (completados.has(curso.id)) {
        div.classList.add("aprobado");
        estado.textContent = "✔️ Curso completado";

        const btn = document.createElement("button");
        btn.textContent = "Desmarcar";
        btn.onclick = () => {
          completados.delete(curso.id);
          guardarProgreso();
          crearMalla();
        };
        div.appendChild(btn);
      } else if (puedeTomar) {
        const btn = document.createElement("button");
        btn.textContent = "Marcar como completado";
        btn.onclick = () => {
          completados.add(curso.id);
          guardarProgreso();
          crearMalla();
        };
        div.appendChild(btn);
        estado.textContent = "✅ Disponible";
      } else {
        div.classList.add("bloqueado");
        let requisitos = [];

        if (!cumpleCursos && curso.prereqs.length > 0) {
          if (curso.semestre === 10) {
            const cursosFaltantes = curso.prereqs.filter(pr => !completados.has(pr)).length;
            requisitos.push(`te faltan ${cursosFaltantes} curso(s)`);
          } else {
            requisitos.push(`cursos: ${curso.prereqs.join(", ")}`);
          }
        }

        if (curso.requiereCreditos && !cumpleCreditos) {
          requisitos.push(`créditos: ${curso.requiereCreditos} (faltan ${curso.requiereCreditos - creditosAcumulados})`);
        }

        estado.textContent = `🔒 Requiere: ${requisitos.join(" | ")}`;
      }


      div.appendChild(estado);
      cursosCont.appendChild(div);
    });

    box.appendChild(cursosCont);
    contenedor.appendChild(box);
  }
}

crearMalla();