import { VegetableService } from '../vegetable.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{Vegetable}from '../vegetable';

@Component({
  selector: 'veg-form',
  templateUrl: './veg-form.component.html',
  styleUrls: []
})
export class vegFormComponent implements OnInit {
  vegetableForm:FormGroup;
  vegetables:Vegetable[]=new Array();

  constructor() { }

  ngOnInit() {
    this.vegetableForm = new FormGroup({
      feedbackId: new FormControl(),
      customerId: new FormControl(),
      vegetableId: new FormControl(),
      rating: new FormControl(),
      comments: new FormControl()
    });
  }

  showFeedback():void{
    let veg:Vegetable = new Vegetable(this.vegetableForm.controls.feedbackId.value, 
                                    this.vegetableForm.controls.customerId.value,
                                    this.vegetableForm.controls.vegetableId.value,
                                    this.vegetableForm.controls.rating.value,
                                    this.vegetableForm.controls.comments.value);
    this.vegetables.push(veg);
  }

}
//public vegetables = [];
  //public errorMsg;
  
  //constructor(private _employeeService:VegetableService) { }

  //ngOnInit() {
    //this._employeeService.getEmployees()
      //.subscribe(data => this.vegetables = data,
        //         error => this.errorMsg = error);     
 // }