import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  editable = false

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(title: string) {
    if (!title) return;

    this.editable = false;
    this.item.title = title;
  }
}
