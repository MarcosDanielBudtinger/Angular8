import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor() {
    console.log("Construct");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
