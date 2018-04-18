import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';




@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

   tableau:Person[]=[
     {id:1,name:'hajer',birthdate:new Date('2015-10-09'), single:false},
     { id:2,name:'fares',birthdate:new Date(), single:true}
    ];
    varP:Person={id:3 ,name:'',birthdate:new Date(),single:true};
  constructor() { 
    
  }

  ngOnInit() {
  }

  addperson():void{
    this.tableau.push(Object.assign({},this.varP));

  }
}
