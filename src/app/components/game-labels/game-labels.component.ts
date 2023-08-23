import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-labels',
  templateUrl: './game-labels.component.html',
  styleUrls: ['./game-labels.component.css']
})
export class GameLabelsComponent {
@Input()
Title: string = ''
@Input()

@Input()
cardPost1: string = ''
@Input()
cardPost2: string = ''
@Input()
cardPost3: string = ''
@Input()
cardPost4: string = ''
@Input()
cardPost5: string = ''
@Input()
cardPost6: string = ''

@Input()
cardImage1: string = ''
@Input()
cardImage2: string = ''
@Input()
cardImage3: string = ''
@Input()
cardImage4: string = ''
@Input()
cardImage5: string = ''
@Input()
cardImage6: string = ''


}
