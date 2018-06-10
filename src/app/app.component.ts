import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CompanyName = 'The Beer Company';
  CompanySpeciality = 'We specialize in beers!';

  template = '<img width=100% src="/assets/img/loading-macro-animation-for-brewery-website.gif" />';

}
