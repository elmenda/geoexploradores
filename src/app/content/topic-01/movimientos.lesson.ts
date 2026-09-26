import { type Lesson } from '../../core/models/lesson.model';
export const MOVIMIENTOS_LESSON: Lesson = {
  id: 'movimientos-tierra', title: 'Los movimientos de la Tierra', subtitle: 'Rotación, traslación, días, noches y estaciones.', description: 'Comprende por qué se suceden el día y la noche y por qué cambia el año.',
  sections: [
    { id:'rotacion', title:'Rotación: el día y la noche', emoji:'🔄', accent:'blue', blocks:[
      {type:'text', text:'La Tierra nunca está quieta. Gira continuamente sobre sí misma y tarda 24 horas, es decir, un día, en completar una vuelta. Este giro se llama movimiento de rotación.'},
      {type:'cards', title:'¿Qué ocurre mientras gira?', items:[
        {title:'Día', emoji:'☀️', description:'En la parte de la Tierra a la que llega la luz del Sol es de día.'},
        {title:'Noche', emoji:'🌙', description:'En la parte a la que no llega la luz del Sol es de noche.'},
      ]},
      {type:'important', title:'IDEA CLAVE', text:'La rotación de la Tierra da lugar a la sucesión de los días y las noches.'},
    ]},
    { id:'traslacion', title:'Traslación: un viaje de un año', emoji:'☀️', accent:'purple', blocks:[
      {type:'text', text:'La Tierra también se desplaza siguiendo su órbita alrededor del Sol. Este recorrido se llama movimiento de traslación y tarda aproximadamente 365 días en completarse.'},
      {type:'important', title:'RECUERDA', text:'Rotación: 24 horas. Traslación: 365 días.'},
      {type:'text', text:'Durante la traslación, la inclinación del eje terrestre hace que los rayos solares lleguen de forma diferente a cada zona. Cambian las horas de luz y el calor recibido, dando lugar a las estaciones.'},
    ]},
    { id:'estaciones', title:'Las cuatro estaciones', emoji:'🍂', accent:'orange', blocks:[
      {type:'cards', title:'¿Qué ocurre en cada estación?', items:[
        {title:'Invierno', emoji:'❄️', description:'Los rayos llegan muy inclinados, los días son cortos y hace más frío.'},
        {title:'Primavera', emoji:'🌸', description:'Los rayos llegan menos inclinados, los días se alargan y las temperaturas aumentan.'},
        {title:'Verano', emoji:'☀️', description:'Los rayos llegan más perpendiculares, los días son más largos y hace más calor.'},
        {title:'Otoño', emoji:'🍂', description:'Los rayos llegan más inclinados, los días se acortan y las temperaturas bajan.'},
      ]},
      {type:'important', title:'NO LO CONFUNDAS', text:'Las estaciones no se producen porque la Tierra esté unas veces mucho más cerca y otras mucho más lejos del Sol. En este tema se explican por la traslación y la inclinación del eje terrestre.'},
    ]},
  ]
};
