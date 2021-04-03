import { Component, OnInit } from '@angular/core';
import { AddfooditemService } from '../services/addfooditem.service'
@Component({
  selector: 'app-food-items-list',
  templateUrl: './food-items-list.component.html',
  styleUrls: ['./food-items-list.component.css']
})
export class FoodItemsListComponent implements OnInit {
  pageTitle = 'FoodItem List';
  imageWidth = 50;
  imageMargin = 2;
  public foodItems;

  constructor(private addFoodItemService: AddfooditemService ) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  getFoodItems(){
    this.addFoodItemService.getfooditemsdb().subscribe(
        data =>
         { this.foodItems= data;
         },
        err => console.error(err),
        ()=>console.log('fooditems loaded')
    );
  }
}
