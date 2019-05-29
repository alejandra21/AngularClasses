import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  lastname: string;
  address: string;

  constructor() {
  	this.name = "Ale";
  	this.lastname = "C";
  	this.address = "Ccs";
  }

  ngOnInit() {

  }

}
