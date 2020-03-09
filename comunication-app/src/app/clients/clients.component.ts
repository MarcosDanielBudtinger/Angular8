import { Component, OnInit } from '@angular/core';
import { client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;

  clients: client[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      { name: this.name, age: this.age }
    );
    this.name = "";
    this.age = 0;
  }

  deleteClient(i: number) {
    this.clients.splice(i, 1);
  }

  updateClient(c: client, i: number) {
    this.clients[i].name = c.name;
    this.clients[i].age = c.age;
  }
}
