import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,ItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  componentTitle = 'Bera To Do List';

  filter: "all" | "active" | "done" = "all"

  allItems = [
    { id: 1, title: "Learn Angular", completed: false },
    { id: 2, title: "Do toDoApp", completed: false },
    { id: 3, title: "Enjoy!!", completed: true },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.completed : !item.completed
    );
  }

  addItem(title: string) {
    if (!title) return;

    this.allItems.unshift({
      id: this.allItems.length+1,
      title,
      completed: false
    });
  }

  remove(item:Item){
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}
