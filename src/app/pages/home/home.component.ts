import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
@Input()
cardImage: string = ''
@Input()
cardTitle: string = ''
@Input()
Title: string = ''

}
