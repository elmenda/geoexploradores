import { type Lesson } from '../../core/models/lesson.model';
export const CAPAS_LESSON: Lesson = {
  id:'capas-tierra', title:'Las capas de la Tierra', subtitle:'Atmósfera, hidrosfera y geosfera.', description:'Conoce las grandes capas de nuestro planeta y qué encontramos en ellas.',
  sections:[
    {id:'tres-capas', title:'Un planeta organizado en capas', emoji:'🌎', accent:'green', blocks:[
      {type:'text', text:'La Tierra es un planeta rocoso que contiene distintos elementos organizados en capas. Podemos distinguir la atmósfera, la hidrosfera y la geosfera.'},
      {type:'cards', title:'Las tres grandes capas', items:[
        {title:'Atmósfera', emoji:'💨', description:'Es la capa que contiene gases. El más abundante es el nitrógeno y también contiene oxígeno, que necesitamos para respirar. En ella se producen fenómenos atmosféricos.'},
        {title:'Hidrosfera', emoji:'💧', description:'Es la capa líquida y reúne toda el agua del planeta: océanos, mares, ríos, lagos, aguas subterráneas y también las nubes.'},
        {title:'Geosfera', emoji:'🪨', description:'Es la parte sólida del planeta. Se extiende desde la superficie hasta el centro y está compuesta por rocas y minerales.'},
      ]},
      {type:'important', title:'NUESTRO HOGAR', text:'Podemos vivir en la Tierra gracias, entre otras cosas, al aire de la atmósfera, el agua de la hidrosfera y la tierra firme de la geosfera.'},
    ]},
    {id:'geosfera', title:'¿Cómo es la geosfera?', emoji:'🌋', accent:'orange', blocks:[
      {type:'text', text:'La geosfera no es uniforme. Desde la superficie hasta el centro de la Tierra distinguimos tres partes: corteza, manto y núcleo.'},
      {type:'cards', title:'De fuera hacia dentro', items:[
        {title:'Corteza', emoji:'🏔️', description:'Es la parte exterior y la más estrecha. Incluye la tierra firme, el lecho de los ríos y el fondo de mares y océanos.'},
        {title:'Manto', emoji:'🟠', description:'Es la parte intermedia. Su temperatura es elevada y contiene rocas fundidas que reciben el nombre de magma.'},
        {title:'Núcleo', emoji:'🔥', description:'Llega hasta el centro de la Tierra. El tema indica que el centro es sólido y que a su alrededor hay materiales a mucha temperatura.'},
      ]},
    ]},
    {id:'corteza-relieve', title:'La corteza y el relieve', emoji:'⛰️', accent:'yellow', blocks:[
      {type:'text', text:'La corteza terrestre es la parte de la geosfera donde vivimos y está formada por rocas y minerales. Hay corteza en los continentes y bajo los océanos.'},
      {type:'text', text:'La superficie no es plana: existen zonas llanas, con pendiente, elevadas y hundidas. El conjunto de formas de los continentes y del fondo de los océanos recibe el nombre de relieve.'},
      {type:'list', title:'Algunas formas del relieve', items:[
        {title:'Montañas', emoji:'⛰️', description:'Formas elevadas del terreno.'},
        {title:'Llanuras', emoji:'🌾', description:'Grandes extensiones relativamente planas.'},
        {title:'Bahías', emoji:'🌊', description:'Entradas del mar en la costa.'},
      ]},
    ]},
  ]
};
