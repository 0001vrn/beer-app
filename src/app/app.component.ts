import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CompanyName: string = 'The Beer Company'
  CompanySpeciality: string = 'We specialize in beers!';

  template: string =`<img width=100% src="/assets/img/loading-macro-animation-for-brewery-website.gif" />`

}
