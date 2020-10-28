import { ProductreviewComponent } from './../productreview/productreview.component';
import { ProductrelatedComponent } from './../productrelated/productrelated.component';
import { ProductoverviewComponent } from './../productoverview/productoverview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailsPageRoutingModule } from './productdetails-routing.module';

import { ProductdetailsPage } from './productdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailsPageRoutingModule
  ],
  declarations: [ProductdetailsPage, ProductoverviewComponent, ProductrelatedComponent, ProductreviewComponent]
})
export class ProductdetailsPageModule {}
