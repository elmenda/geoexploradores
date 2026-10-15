import { type Question } from '../../core/models/question.model';

// Preguntas inéditas para el repaso. No se reutiliza ninguna pregunta de las prácticas.
const q = (
  id: string,
  question: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium',
): Question => ({
  id, question, answers: [
    { id: 'a', text: correct, correct: true },
    { id: 'b', text: wrong[0], correct: false },
    { id: 'c', text: wrong[1], correct: false },
    { id: 'd', text: wrong[2], correct: false },
  ],
  explanation, difficulty, points: difficulty === 'hard' ? 30 : difficulty === 'medium' ? 20 : 10,
});

export const TIERRA_REPASO_QUESTIONS: Question[] = [
  q('rs01', 'Una astrónoma ve que un astro produce luz y calor continuamente. ¿Qué clase de astro puede ser?', 'Una estrella', ['Un satélite natural', 'Un planeta', 'Un cometa'], 'Las estrellas, como el Sol, emiten luz y calor propios.'),
  q('rs02', 'Si un viaje espacial sale de Venus y se dirige al siguiente planeta más alejado del Sol, ¿a cuál llegará?', 'A la Tierra', ['A Mercurio', 'A Marte', 'A Júpiter'], 'El orden desde el Sol comienza por Mercurio, Venus, Tierra y Marte.', 'hard'),
  q('rs03', 'Si ordenas los planetas del Sol hacia fuera, ¿qué pareja aparece justo después de la Tierra?', 'Marte y Júpiter', ['Venus y Mercurio', 'Saturno y Urano', 'Júpiter y Neptuno'], 'Después de la Tierra se encuentran Marte y Júpiter.'),
  q('rs04', 'Una noche vemos toda la cara visible de la Luna iluminada. ¿Qué fase observamos?', 'Luna llena', ['Luna nueva', 'Cuarto creciente', 'Cuarto menguante'], 'La Luna llena muestra toda su cara visible iluminada.'),
  q('rs05', '¿Por qué la Luna nos muestra siempre casi la misma cara?', 'Porque tarda aproximadamente lo mismo en girar sobre sí misma que en dar una vuelta a la Tierra', ['Porque no gira sobre sí misma', 'Porque el Sol permanece inmóvil sobre ella', 'Porque la Tierra no gira'], 'La rotación y la traslación lunar tienen duraciones semejantes, de unos 28 días.', 'hard'),

  q('rm01', 'Un astronauta observa que una mitad de la Tierra recibe luz solar y la otra está oscura. ¿Qué explica esta diferencia?', 'Que solo la parte orientada hacia el Sol recibe su luz', ['Que el Sol se apaga durante la noche', 'Que la Luna ilumina solo una mitad', 'Que la Tierra deja de moverse'], 'La Tierra es esférica y la luz del Sol no alcanza a toda su superficie a la vez.'),
  q('rm02', 'Una maestra compara dos movimientos: uno dura un día y otro alrededor de un año. ¿Cuál es el segundo?', 'La traslación alrededor del Sol', ['La rotación sobre el eje', 'La rotación de la Luna', 'El cambio de una fase lunar'], 'La Tierra tarda unos 365 días en completar su traslación.'),
  q('rm03', 'En una estación los días se acortan y las temperaturas descienden. ¿Cuál es?', 'Otoño', ['Primavera', 'Verano', 'Invierno'], 'Durante el otoño disminuyen las horas de luz y bajan las temperaturas.'),
  q('rm04', 'Si en un lugar llegan los rayos del Sol más perpendiculares y hay más horas de luz, ¿qué estación describe el libro?', 'Verano', ['Invierno', 'Otoño', 'Primavera'], 'Durante el verano del hemisferio considerado llegan los rayos más directamente y los días son largos.'),
  q('rm05', 'Dos países de hemisferios diferentes pueden tener estaciones distintas. ¿Qué característica terrestre resulta esencial para comprenderlo?', 'La inclinación del eje terrestre', ['La forma de los cráteres lunares', 'La presencia de otros planetas', 'La duración de los terremotos'], 'La inclinación del eje y la traslación hacen variar la iluminación de cada hemisferio.', 'hard'),

  q('rc01', 'Un científico analiza el aire y encuentra principalmente nitrógeno, además de oxígeno. ¿Qué capa estudia?', 'La atmósfera', ['La geosfera', 'La corteza', 'El núcleo'], 'La atmósfera es la capa gaseosa que rodea nuestro planeta.'),
  q('rc02', 'Una niña encuentra agua bajo tierra y se pregunta a qué capa pertenece. ¿Qué debe responder?', 'A la hidrosfera', ['A la atmósfera solamente', 'Al núcleo', 'Al manto'], 'La hidrosfera incluye todas las aguas, también las subterráneas.'),
  q('rc03', 'Al investigar rocas del fondo de un océano, ¿qué gran capa de la Tierra se estudia?', 'La geosfera', ['La atmósfera', 'La hidrosfera por ser agua', 'La órbita'], 'Las rocas del fondo oceánico pertenecen a la parte sólida del planeta.'),
  q('rc04', 'Un dibujo muestra tres partes de la geosfera. ¿Cuál es el orden correcto desde la superficie hacia el centro?', 'Corteza, manto y núcleo', ['Núcleo, manto y corteza', 'Manto, corteza y núcleo', 'Atmósfera, hidrosfera y geosfera'], 'La corteza es exterior; después encontramos el manto y, en el centro, el núcleo.'),
  q('rc05', 'Una excursión atraviesa llanuras, montañas y una bahía. ¿Qué está observando?', 'Distintas formas del relieve', ['Tres tipos de atmósfera', 'Las fases lunares', 'Los movimientos de rotación'], 'El relieve reúne las formas de la superficie terrestre, también en las costas.', 'hard'),

  q('ra01', 'Después de muchas semanas sin precipitaciones, los embalses tienen muy poca agua. ¿Qué fenómeno puede estar ocurriendo?', 'Una sequía', ['Un huracán', 'Un terremoto', 'Una erupción'], 'La sequía es un periodo prolongado sin precipitaciones.'),
  q('ra02', 'Una tormenta extrema hace que un río se desborde e invada las calles próximas. ¿Qué sucede?', 'Una inundación', ['Una erupción volcánica', 'Un terremoto', 'Una traslación'], 'Las inundaciones pueden ocurrir cuando el caudal supera la capacidad del río.'),
  q('ra03', 'En una isla se observan lava y gases saliendo por una abertura de una montaña. ¿Qué está ocurriendo?', 'Una erupción volcánica', ['Un huracán', 'Una sequía', 'Un eclipse'], 'Durante la erupción un volcán expulsa materiales por su cráter.'),
  q('ra04', 'Un movimiento brusco del suelo daña algunas construcciones. ¿Con qué instrumento se registra este fenómeno?', 'Con un sismógrafo', ['Con un telescopio', 'Con una brújula', 'Con un termómetro'], 'El sismógrafo registra los movimientos sísmicos.'),
  q('ra05', 'Un temporal trae lluvias muy intensas y vientos violentos. ¿Qué fenómeno describe el libro?', 'Un huracán', ['Una sequía', 'Un terremoto', 'Una erupción'], 'Los huracanes son tormentas con vientos muy violentos y lluvias intensas.'),

  q('re01', 'Antes de realizar un simulacro en el colegio, ¿qué información conviene conocer?', 'La ruta de salida y el punto de encuentro', ['El número de ejercicios del próximo examen', 'La fecha de la siguiente excursión', 'El orden de los planetas'], 'Conocer ruta y punto de encuentro permite evacuar de manera organizada.'),
  q('re02', 'Suena la alarma de evacuación y alguien recuerda que olvidó su mochila. ¿Qué debería hacer?', 'Seguir con el grupo sin volver por la mochila', ['Regresar solo al aula', 'Correr hacia otra salida sin avisar', 'Esperar escondido hasta que termine'], 'Durante una evacuación debemos mantener el orden y seguir las indicaciones.'),
  q('re03', 'Después de un simulacro, el profesorado descubre que una señal no se veía bien. ¿Qué sería razonable hacer?', 'Revisar y mejorar la señalización', ['No comentar el problema', 'Dejar de practicar evacuaciones', 'Cambiar de ruta sin informar'], 'Revisar los problemas detectados permite mejorar el plan de emergencias.'),
];
