import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import { Vegetable } from '../vegetable';
import { VegetableService } from '../vegetable.service';

@Component({
  selector: 'rf-form',
  templateUrl: './rf-form.component.html',
  styleUrls: []//,
  //providers:[EmployeeService]
})
export class RfFormComponent implements OnInit {
  vegetableForm: FormGroup;
  vegetables: Vegetable[];
  ratings:Vegetable[];
  ratingForm:FormGroup;
  feeds1:Vegetable[];
  feeds2:Vegetable[];
  customersearchForm:FormGroup;
  vegetablesearchForm:FormGroup;

  //customers:Customer;

  constructor(private fb: FormBuilder, private service:VegetableService) {
    this.vegetables=new Array();
    this.ratings=new Array();
    this.feeds2=new Array();
    this.feeds1=new Array();
  }

  ngOnInit() {
    console.log("ng on init");
    this.vegetableForm = this.fb.group({
      feedbackId: ['', Validators.required],
      customerId: ['', Validators.required],
      vegetableId: ['', Validators.required],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
    this.ratingForm = new FormGroup({
      searchId: new FormControl()
    });
    this.customersearchForm = new FormGroup({
      searchId: new FormControl()
    });
    this.vegetablesearchForm = new FormGroup({
      searchId: new FormControl()
    });

      
  }
  getFeedbacks(){
  this.service.getFeeds().subscribe(data=>{
    alert("Data: ");
       this.vegetables = data;
     });
    }

  addFeedback(): void {
    let veg: Vegetable = new Vegetable(this.vegetableForm.controls.feedbackId.value,
      this.vegetableForm.controls.customerId.value,
      this.vegetableForm.controls.vegetableId.value,
      this.vegetableForm.controls.rating.value,
      this.vegetableForm.controls.comments.value);
    //this.employees.push(emp);
    //this.employees = this.service.addEmployee(emp);
    this.service.addFeedback(veg).subscribe(data =>{
      alert("data: "+JSON.stringify(data));
      this.vegetables.push(veg);
    },
    error => {
      alert('Entered Invalid / Duplicate values ');
    }
    );
  }
  findCID() {
    this.service
      .getfeedbackByCId(this.customersearchForm.controls.searchId.value)
      .subscribe((data: any) => {
        this.feeds1 = data;
      },
      error=>{
        alert('Invalid customer id, Search not found')
      });
  }
  findVID() {
    this.service
      .getFeedbackByVId(this.vegetablesearchForm.controls.searchId.value)
      .subscribe((data: any) => {
        this.feeds2 = data;
      },
      error=>{
        alert('Invalid vegetable id, Search not found')
      });
  }
  getRatings(){
    this.service.getRating(this.ratingForm.controls.searchId.value).subscribe((data: any)=>{
      this.ratings = data;
    },
    error=>{
      alert(' Ratings should be in range 1-5')
    });
  }
}


