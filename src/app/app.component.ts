import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipe';

  onNavigated(feature:string){
    this.loadedFeature= feature;
  }
  title = 'my-first-app';
}
