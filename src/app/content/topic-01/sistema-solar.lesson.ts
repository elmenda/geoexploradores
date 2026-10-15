import { type Lesson } from '../../core/models/lesson.model';

export const SISTEMA_SOLAR_LESSON: Lesson = {
  id: 'sistema-solar',
  title: 'La Tierra en el sistema solar',
  subtitle: 'El Sol, los planetas, otros astros y nuestra Luna.',
  description: 'Descubre dónde está la Tierra y quiénes son sus vecinos en el espacio.',
  sections: [
    {
      id: 'sistema-solar', title: 'Nuestro sistema solar', emoji: '☀️', accent: 'purple', blocks: [
        { type: 'text', text: 'La Tierra forma parte del sistema solar: un conjunto de astros con una estrella, el Sol, alrededor de la que giran planetas, cometas y otros cuerpos.' },
        { type: 'important', title: 'RECUERDA', text: 'El Sol es la estrella del sistema solar y está en su centro.' },
        { type: 'cards', title: 'Los protagonistas', items: [
          { title: 'El Sol', emoji: '☀️', description: 'Es una enorme bola de gases a alta temperatura. Emite luz y calor continuamente.' },
          { title: 'Planetas', emoji: '🪐', description: 'Son cuerpos aproximadamente esféricos, sin luz propia, que orbitan alrededor del Sol.' },
          { title: 'Satélites', emoji: '🌙', description: 'Son cuerpos celestes sin luz propia que giran alrededor de un planeta.' },
          { title: 'Cometas', emoji: '☄️', description: 'Son astros helados con cola que giran alrededor del Sol.' },
        ]},
      ]
    },
    {
      id: 'planetas', title: 'Los ocho planetas', emoji: '🪐', accent: 'blue', blocks: [
        { type: 'text', text: 'Los ocho planetas giran alrededor del Sol siguiendo órbitas con forma de elipse. Aprender su orden nos ayuda a situar la Tierra dentro del sistema solar.' },
        { type: 'list', title: 'Desde el más cercano al más alejado del Sol', items: [
          { title: '1. Mercurio', emoji: '🟤' }, { title: '2. Venus', emoji: '🟠' }, { title: '3. Tierra', emoji: '🌍' }, { title: '4. Marte', emoji: '🔴' },
          { title: '5. Júpiter', emoji: '🟤' }, { title: '6. Saturno', emoji: '🪐' }, { title: '7. Urano', emoji: '🔵' }, { title: '8. Neptuno', emoji: '🔷' },
        ]},
        { type: 'important', title: 'PISTA', text: 'La Tierra es el tercer planeta del sistema solar por su distancia al Sol.' },
      ]
    },
    {
      id: 'tierra-luna', title: 'La Tierra y la Luna', emoji: '🌍', accent: 'green', blocks: [
        { type: 'text', text: 'La Tierra tiene forma de esfera algo achatada por los polos. La Luna es su único satélite natural: es esférica, mucho más pequeña que nuestro planeta y no tiene luz propia. La vemos brillante porque la ilumina el Sol. No tiene atmósfera como la Tierra, y en el libro se explica que por ello no hay vida en ella.' },
        { type: 'cards', title: 'Los movimientos de la Luna', items: [
          { title: 'Rotación', emoji: '🔄', description: 'La Luna gira sobre sí misma y tarda unos 28 días en completar una vuelta.' },
          { title: 'Traslación', emoji: '🌍', description: 'Al mismo tiempo, gira alrededor de la Tierra y tarda también unos 28 días.' },
        ]},
        { type: 'important', title: '¿POR QUÉ VEMOS SIEMPRE LA MISMA CARA?', text: 'Porque la Luna tarda aproximadamente lo mismo en girar sobre sí misma que en dar una vuelta alrededor de la Tierra.' },
      ]
    },
    {
      id: 'fases', title: 'Las fases de la Luna', emoji: '🌙', accent: 'yellow', blocks: [
        { type: 'text', text: 'Mientras la Luna se mueve alrededor de la Tierra, el Sol no ilumina del mismo modo la parte que vemos. Por eso observamos distintas fases lunares.' },
        { type: 'cards', title: 'Las cuatro fases principales', items: [
          { title: 'Luna nueva', emoji: '🌑', description: 'La Luna está entre la Tierra y el Sol y casi no se observa.' },
          { title: 'Cuarto creciente', emoji: '🌓', description: 'Se observa iluminada aproximadamente su mitad derecha. Suele verse durante la tarde y la noche.' },
          { title: 'Luna llena', emoji: '🌕', description: 'La Tierra se encuentra entre la Luna y el Sol y vemos la cara lunar iluminada.' },
          { title: 'Cuarto menguante', emoji: '🌗', description: 'Se observa iluminada aproximadamente su mitad izquierda. Suele distinguirse de madrugada.' },
        ]},
      ]
    },
  ],
};
