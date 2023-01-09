import { Component } from '@angular/core';

// Compnent adds metadata to the class AppComponent
// it tells the module what its role is
@Component({
  // if selector is changed, the html tag in index.html must be as well
  selector: 'app-welcome',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// title is defined in {{ title }} in /app.component.html
export class AppComponent {
  title = 'MyApp';
}
