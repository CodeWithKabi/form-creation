import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-summary',
  imports: [],
  templateUrl: './quick-summary.html',
  styleUrl: './quick-summary.scss',
})
export class QuickSummary {
  @Input() completedCount: number = 0;
  @Input() pendingCount: number = 0;
  @Input() message: string = '';
}