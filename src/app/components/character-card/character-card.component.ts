import { Component, Input } from '@angular/core';

@Component({
  selector: 'io-character-card',
  templateUrl: 'character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() data: any;
}
