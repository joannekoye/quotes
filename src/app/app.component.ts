import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote ('I got Flowers today', 'Ms. DSF', 'Joan Nekoye',0, 0, new Date (2020,1,5))
  ]
}
