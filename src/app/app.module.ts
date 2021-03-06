import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';



@NgModule({
  imports: [ 
              BrowserModule,
              ReactiveFormsModule,
              FormsModule,
              RouterModule.forRoot([
                {path:'',component:ProductListComponent},
                {path:'products/:productId',component:ProductDetailsComponent}
              ]) 
            ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, ProductListComponent, ProductAlertsComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
