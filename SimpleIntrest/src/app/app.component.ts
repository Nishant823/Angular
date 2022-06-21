import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Interest Calculator';
  count: number = 0;
  isDisabled = false; //property binding ->from component to view
  value: string = '';

  onSave() {
    console.log('Button clicked'); //event binding ->from view to component
    this.value = ' ';
  }
  calc: number = 0;
  p: number = 0;
  r: number = 0;
  t: number = 0;
  // calc: number = (this.p * this.r * this.t) / 100;
  onCalc() {
    this.calc = (this.p * this.r * this.t) / 100;
  }
}
