import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  allTodos: any = [];
  addData(data: string) {
    console.log(this.allTodos);
    if (data && data.length > 0) {
      // The variable is defined and not empty
      this.allTodos.push({ id: this.allTodos.length, name: data });
    }
  }

  removeTodo(ids: any) {
    this.allTodos = this.allTodos.filter((item: any) => item.id !== ids);
  }
}
