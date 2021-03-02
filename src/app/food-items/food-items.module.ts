import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemsAddComponent } from './food-items-add.component';
import { FoodItemsDetailsComponent } from './food-items-details.component';
import { FoodItemsEditComponent } from './food-items-edit.component';
import { FoodItemsListComponent } from './food-items-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FoodItemsAddComponent, FoodItemsDetailsComponent, FoodItemsEditComponent, FoodItemsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FoodItemsModule { }
