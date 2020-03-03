import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "Marcos";
  name2: string = "Daniel";

  client = {
    firstName: "Marcos",
    lastName: "Daniel",
    address: "Capanema - PR",
    age: 29
  };
  constructor() { }

  ngOnInit() {
  }

}
