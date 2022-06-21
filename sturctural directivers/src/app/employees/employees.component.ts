import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  people: any[] = [
    
    {"name": "Rahul","age": 31,"gender": 'Male',"occupation":'SDE'},

    {"name": "Raj","age": 38,"gender": 'Male',"occupation":'Manager'},

    {"name": "Aman","age": 40,"gender": 'Male',"occupation":'SDE'},

    {"name": "Akash","age": 22,"gender": 'Male',"occupation":'Manager'},

    {"name": "Reena","age": 32,"gender": 'Female',"occupation":'Intern'},

    {"name": "Sapna","age": 28,"gender": 'Female',"occupation":'SDE'},
  ]

}
