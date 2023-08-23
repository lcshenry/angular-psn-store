import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-games',
  templateUrl: './card-games.component.html',
  styleUrls: ['./card-games.component.css']
})
export class CardGamesComponent {
@Input()
cardImage: string = ''
@Input()
cardTitle: string = ''
}
