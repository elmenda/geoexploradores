import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { type Question } from '../../core/models/question.model';

@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.html',
  styleUrl: './result.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPage {
  readonly topicId = input<string>('');
  private readonly progress = inject(ProgressService);
  private readonly content = inject(ContentService);
  protected readonly result = this.progress.lastResult();
  protected readonly isPractice = !!this.result?.lessonId;
  protected readonly missed = computed(() => {
    const result = this.result;
    if (!result) return [];
    const bank: Question[] = result.lessonId
      ? []
      : (this.content.getTopic(result.topicId)?.questions ?? []);
    return bank.filter(question => result.wrongQuestionIds.includes(question.id));
  });
  protected readonly pct = computed(() =>
    this.result?.total ? Math.round((this.result.score / this.result.total) * 100) : 0,
  );
  protected readonly stars = computed(() =>
    this.pct() >= 90 ? '⭐⭐⭐' : this.pct() >= 70 ? '⭐⭐' : this.pct() >= 50 ? '⭐' : '🌱',
  );
}
