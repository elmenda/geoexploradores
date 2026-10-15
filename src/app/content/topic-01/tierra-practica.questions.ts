import { type Question } from '../../core/models/question.model';
import { TIERRA_QUESTIONS } from './tierra.questions';

// Las preguntas de práctica son independientes del repaso final.
// Se distribuyen según las cinco lecciones del tema.
const q = (
  id: string,
  question: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string,
): Question => ({
  id,
  question,
  answers: [
    { id: 'a', text: correct, correct: true },
    { id: 'b', text: wrong[0], correct: false },
    { id: 'c', text: wrong[1], correct: false },
    { id: 'd', text: wrong[2], correct: false },
  ],
  explanation,
  difficulty: 'medium',
  points: 20,
});

export const TIERRA_PRACTICA: Record<string, Question[]> = {
  'sistema-solar': TIERRA_QUESTIONS.slice(0, 14),
  'movimientos-tierra': TIERRA_QUESTIONS.slice(14, 24),
  'capas-tierra': TIERRA_QUESTIONS.slice(24, 37),
  'actividad-tierra': TIERRA_QUESTIONS.slice(37, 46),
  emergencias: [
    ...TIERRA_QUESTIONS.slice(46, 50),
    q('pe05', '¿Qué conviene hacer al escuchar la alarma de evacuación?', 'Escuchar al profesorado y seguir las instrucciones', ['Salir corriendo sin avisar', 'Volver a por los juguetes', 'Esperar escondido'], 'Hay que mantener la calma y seguir las instrucciones del equipo de emergencias.'),
    q('pe06', 'Durante un simulacro, ¿qué debemos hacer si vemos una salida cerrada?', 'Seguir las instrucciones del equipo responsable', ['Abrir cualquier ventana', 'Separarnos del grupo', 'Empujar la puerta todos a la vez'], 'El equipo de emergencias conoce las rutas alternativas de evacuación.'),
    q('pe07', 'Después de practicar una evacuación, ¿qué puede hacer el colegio?', 'Revisar qué ha funcionado y qué debe mejorar', ['Olvidar el recorrido', 'Cambiar la ruta sin avisar', 'Evitar nuevos simulacros'], 'La revisión permite corregir errores y mejorar el plan.'),
    q('pe08', '¿Por qué es importante conocer el punto de encuentro?', 'Para reunirse y comprobar que todos están a salvo', ['Para dejar las mochilas', 'Para esperar a los amigos al recreo', 'Para observar el cielo'], 'El punto de encuentro permite reunir y comprobar que no falta nadie.'),
    q('pe09', '¿Qué decisión demuestra responsabilidad en una evacuación?', 'Caminar sin empujar junto al grupo', ['Correr para llegar primero', 'Regresar a buscar el abrigo', 'Desobedecer las indicaciones'], 'La evacuación se realiza con orden y siguiendo al personal responsable.'),
    q('pe10', '¿Qué debe conocer el alumnado antes de hacer un simulacro?', 'La ruta de evacuación y las señales', ['El resultado antes de empezar', 'La hora de finalización exacta de cada clase', 'La temperatura del aula'], 'Conocer los recorridos y señales facilita una salida organizada.'),
    q('pe11', 'Si una persona necesita ayuda para desplazarse, ¿cómo hay que actuar?', 'Avisar y seguir el protocolo del colegio', ['Llevarla por una ruta improvisada', 'Dejarla atrás', 'Pedirle que se esconda'], 'La ayuda debe seguir el protocolo del centro y las indicaciones de los responsables.'),
    q('pe12', '¿Por qué es útil repetir los simulacros en distintos momentos?', 'Porque practicar ayuda a recordar cómo actuar', ['Porque siempre ocurre una catástrofe', 'Porque se aprende a correr más', 'Porque sustituye a las clases'], 'La repetición permite conocer y mejorar el procedimiento.'),
  ],
};
