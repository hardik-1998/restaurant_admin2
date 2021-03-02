import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddfooditemService } from '../services/addfooditem.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-items-add',
  templateUrl: './food-items-add.component.html',
  styleUrls: ['./food-items-add.component.css']
})
export class FoodItemsAddComponent implements OnInit {

  addFoodItemForm : FormGroup;
  validMessage: string="";

  constructor(private fb: FormBuilder,
              private addFoodItemService: AddfooditemService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.addFoodItemForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Price:  ['', [Validators.required]],
      Category: ['', [Validators.required, Validators.minLength(3)]],
      Available: 'no',
      Description: [''],
      Image: null,
    });
  }

  saveItem(){
    if(this.addFoodItemForm.valid){
      this.validMessage="your food Item submitted. Thank U!!!!";
      this.addFoodItemService.addfooditemdb(this.addFoodItemForm.value).subscribe(
        data =>{
          this.addFoodItemForm.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }

      )
    }else{
      this.validMessage="please fill out the form before submitting";
    }
  }

}
