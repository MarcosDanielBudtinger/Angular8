import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: client;
  @Output() updateClient = new EventEmitter<client>();
  @Output() removeClient = new EventEmitter<any>();


  onEdit: boolean = false;
  name: string;
  age: number;

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove() {
    this.removeClient.emit();
  }

  save() {
    this.onEdit = false;
    this.updateClient.emit(
      { name: this.name, age: this.age }
    );
  }
}