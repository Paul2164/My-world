import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  template: '<li>(TODO) Read cup of coffe introduction</li>',
  styles: ['li{color:papayawhip;}']
})
export class TodoListItemComponent {
  // public taskTitle = "";
  // public isComplete = true;
  // updateTitle(newTitle:string) {
  //   this.taskTitle = newTitle;
  // }
  // completeTask(){
  //   this.isComplete = true;
  // }
}
