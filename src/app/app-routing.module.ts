import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodItemsAddComponent } from './food-items/food-items-add.component';
import { FoodItemsListComponent } from './food-items/food-items-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent},
            { path: 'addfooditems', component: FoodItemsAddComponent},
            { path: 'fooditemlist', component: FoodItemsListComponent},
            { path: '',redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
          ],{ enableTracing: true})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}
