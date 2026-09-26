import { type Lesson } from '../../core/models/lesson.model';
export const EMERGENCIAS_LESSON: Lesson = {
 id:'emergencias', title:'Actuamos ante catástrofes naturales', subtitle:'Cómo prepararnos y actuar en un simulacro.', description:'Aprende por qué practicar una evacuación nos ayuda a estar preparados.',
 sections:[
  {id:'plan', title:'Preparar un plan de emergencias', emoji:'🚨', accent:'purple', blocks:[
   {type:'text', text:'Los simulacros permiten practicar cómo actuar ante una emergencia. En el colegio es importante coordinarse con el equipo de emergencias, conocer la ruta de evacuación y realizar simulacros.'},
   {type:'list', title:'Tres pasos principales', items:[
    {title:'1. Coordinarse', emoji:'🤝', description:'Seguir las indicaciones del equipo de emergencias del colegio.'},
    {title:'2. Conocer la ruta', emoji:'➡️', description:'Saber por dónde evacuar y dónde está el punto de encuentro.'},
    {title:'3. Practicar', emoji:'🚨', description:'Realizar simulacros para saber cómo actuar cuando sea necesario.'},
   ]},
  ]},
  {id:'simulacro', title:'Durante un simulacro', emoji:'🦺', accent:'green', blocks:[
   {type:'text', text:'Los responsables de clase ayudan a comprobar que todos estén preparados y guían al grupo hasta el punto de encuentro. También hay que atender a las personas con movilidad reducida y seguir las órdenes del equipo de emergencias.'},
   {type:'important', title:'ACTÚA CON RESPONSABILIDAD', text:'Mantén la calma, escucha las indicaciones, sigue la ruta establecida y no te separes del grupo.'},
   {type:'text', text:'Después del simulacro es útil revisar cómo ha ido y qué podría mejorarse. Practicar periódicamente ayuda a que todos conozcan el procedimiento.'},
  ]},
 ]
};
