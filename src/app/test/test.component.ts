import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  standalone: true,
  imports: [],

  template: `
    <h2>
      Welcome {{name}}  
    </h2>

    <input #myInput type = "text">
    <button (click) ="logMessage(myInput)">Log</button>
    `
   
    ,
  styles: []
})
export class TestComponent {
 public name = "Angular Class";

 logMessage (value: any) {
  console.log(value);
   
 }

 constructor () {}
 
}
