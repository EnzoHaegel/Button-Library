import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Button-Library';

  public printStyle(classStyle: string): void {
    var elem, style;
    elem = document.querySelector(classStyle || '.container');
    style = getComputedStyle(elem!);
    console.log(style);
  }
}
