import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path:'buy',
        children:[
          {
            path:'',
            loadChildren: () => import('./buy/buy.module').then(m => m.BuyPageModule)
          }
          //add more children here
        ]
      },
      {
        path:'category',
        children:[
          {
            path:'',
            loadChildren: () => import('./category/category.module').then(m => m.CategoryPageModule)
          }
          //add more children here
        ]
      },
      {
        path:'sell',
        children:[
          {
            path:'',
            loadChildren: () => import('./sell/sell.module').then(m => m.SellPageModule)
          }
          //add more children here
        ]
      },
      {
        path:'help',
        children:[
          {
            path:'',
            loadChildren: () => import('./help/help.module').then(m => m.HelpPageModule)
          }
          //add more children here
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/buy',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/buy',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

