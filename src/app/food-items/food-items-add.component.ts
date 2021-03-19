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
  image : any = File;
  validMessage: boolean=false;

  constructor(private fb: FormBuilder,
              private addFoodItemService: AddfooditemService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.addFoodItemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price:  ['', [Validators.required]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      available:'yes',
      description: [''],
      createDate:null,
      updateDate:null
    });
  }

  onSelectFile(event){
    const file = event.target.files[0];
    this.image = file;
  }

  saveItem(){
    if(this.addFoodItemForm.valid){
      const fooditemdata = this.addFoodItemForm.value;
      const formData = new FormData();
      formData.append('fooditemdata', JSON.stringify(fooditemdata));
      formData.append('file', this.image);
      this.addFoodItemService.addfooditemdb(formData).subscribe(
        data =>{
          this.validMessage = true;
          this.addFoodItemForm.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      )

    }
  }
  closeValidMessage(){
    this.validMessage = false;
  }

}
