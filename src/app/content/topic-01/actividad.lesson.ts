import { type Lesson } from '../../core/models/lesson.model';
export const ACTIVIDAD_LESSON: Lesson = {
 id:'actividad-tierra', title:'La actividad de la Tierra', subtitle:'Huracanes, inundaciones, sequías, incendios, terremotos y volcanes.', description:'Descubre cómo se manifiesta la energía de nuestro planeta.',
 sections:[
  {id:'atmosfera-hidrosfera', title:'Actividad en atmósfera e hidrosfera', emoji:'🌧️', accent:'blue', blocks:[
   {type:'text', text:'La atmósfera y la hidrosfera tienen una actividad intensa. Algunos fenómenos pueden provocar catástrofes y afectar a las personas y al paisaje.'},
   {type:'cards', title:'Fenómenos que debemos conocer', items:[
    {title:'Huracanes', emoji:'🌀', description:'Son tormentas con lluvias intensas y vientos muy violentos.'},
    {title:'Inundaciones', emoji:'🌊', description:'Son desbordamientos del caudal de un río o torrente por lluvias extremas.'},
    {title:'Sequías', emoji:'☀️', description:'Son periodos largos sin precipitaciones y pueden coincidir con olas de calor.'},
    {title:'Incendios', emoji:'🔥', description:'En la naturaleza pueden originarse por rayos, aunque muchos son provocados por las personas.'},
   ]},
  ]},
  {id:'geosfera-activa', title:'Actividad en la geosfera', emoji:'🌋', accent:'orange', blocks:[
   {type:'cards', title:'Dos manifestaciones de la corteza terrestre', items:[
    {title:'Terremotos', emoji:'🏚️', description:'Son temblores en la corteza terrestre que pueden llegar a fracturarla. Su energía es variable y se registra con un sismógrafo.'},
    {title:'Erupciones volcánicas', emoji:'🌋', description:'Expulsan por el cráter de un volcán magma, lava y gases. Su intensidad, duración y frecuencia pueden variar.'},
   ]},
   {type:'important', title:'VOCABULARIO', text:'Magma es el material rocoso fundido del interior. Cuando el material sale al exterior durante una erupción hablamos de lava.'},
  ]},
  {id:'la-palma', title:'Un ejemplo: Cumbre Vieja', emoji:'🌋', accent:'purple', blocks:[
   {type:'text', text:'El tema recuerda la erupción volcánica de La Palma de 2021 como ejemplo de una gran catástrofe natural. Comenzó el 19 de septiembre y el proceso eruptivo se dio por finalizado el 25 de diciembre, tras 85 días y 8 horas de erupción.'},
   {type:'text', text:'La noticia adaptada del libro explica que se destruyeron infraestructuras, se modificó el paisaje de la isla y la vida de más de 7.000 personas quedó afectada.'},
   {type:'important', title:'PIENSA', text:'Una catástrofe natural no solo cambia el paisaje: también puede afectar a viviendas, carreteras, servicios y a la vida diaria de muchas personas.'},
  ]},
 ]
};
