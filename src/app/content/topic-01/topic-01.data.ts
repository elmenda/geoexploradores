import { type Topic } from '../../core/models/topic.model';
import { SISTEMA_SOLAR_LESSON } from './sistema-solar.lesson';
import { MOVIMIENTOS_LESSON } from './movimientos.lesson';
import { CAPAS_LESSON } from './capas.lesson';
import { ACTIVIDAD_LESSON } from './actividad.lesson';
import { EMERGENCIAS_LESSON } from './emergencias.lesson';
import { TIERRA_QUESTIONS } from './tierra.questions';
export const TOPIC_01: Topic = {
  id: 'tema-1', number: 1, title: 'La Tierra',
  description: 'Explora el sistema solar, los movimientos y capas de la Tierra y aprende cómo actuar ante fenómenos naturales.',
  emoji: '🌍',
  lessons: [SISTEMA_SOLAR_LESSON, MOVIMIENTOS_LESSON, CAPAS_LESSON, ACTIVIDAD_LESSON, EMERGENCIAS_LESSON],
  questions: TIERRA_QUESTIONS,
};
