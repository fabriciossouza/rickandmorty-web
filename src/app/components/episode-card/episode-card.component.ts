import { Component, Input } from '@angular/core';

@Component({
  selector: 'io-episode-card',
  templateUrl: 'episode-card.component.html',
  styleUrls: ['./episode-card.component.scss'],
})
export class EpisodeCardComponent {
  @Input() data: any;
}
