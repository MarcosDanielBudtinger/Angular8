import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Marcos Daniel";


  person = {
    firstName: "Marcos",
    lastName: "Daniel",
    age: '29',
    address: 'Capanema - PR'
  }

  constructor() { }

  ngOnInit() {
  }

}
