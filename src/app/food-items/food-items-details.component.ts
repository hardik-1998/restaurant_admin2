import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddfooditemService } from '../services/addfooditem.service';

@Component({
  selector: 'app-food-items-details',
  templateUrl: './food-items-details.component.html',
  styleUrls: ['./food-items-details.component.css']
})
export class FoodItemsDetailsComponent implements OnInit {

  pageTitle = 'FoodItem Detail';
  public foodItem;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private addFoodItemService: AddfooditemService ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getFoodItem(id);
    }
  }

  getFoodItem(id: number):void {
      this.addFoodItemService.getfooditemdb(id).subscribe(
        data =>
        { this.foodItem = data;
        },
       err => console.error(err),
       ()=>console.log('fooditem loaded')
       );
  }

  onBack(): void {
    this.router.navigate(['/fooditemlist']);
  }

}
