import { FunctionsService } from './../../services/functions.service';
import { ShopService } from './../service/shop.service';
import { Router } from '@angular/router';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {
  products: any;
  recents: any;
  topsellingProducts: any;
  recentProducts: any;
  featuredProducts: any;
  bestsellerProducts: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_VISITED = 'hasVisited';
  constructor(
    private fun: FunctionsService,
    private router: Router,
    private shopService: ShopService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
  ) {

  }

  onOpen(link) {
    this.fun.navigate(link);
  }

  async ionViewWillEnter() {
    const { value } = await Storage.get({ key: this.HAS_VISITED });
    if (!value) {
      this.getIP();
    }
    this.getTopSellingProducts();
    this.GetRecentlyAddedProducts();
    this.GetFeaturedProducts();
    this.GetBestSellersProducts();
  }



  getIP() {
    this.authService.getIPAddress().subscribe((res: any) => {
      this.authService.SaveGuest(res.ip, res.city + ' ' + res.country_name)
        .subscribe(res => {
          Storage.set({ key: this.HAS_VISITED, value: 'true' });
          this.fun.navigate('home', false);
          const event = new CustomEvent('user:guest');
          return window.dispatchEvent(event);
        })
    }, error => {
    });
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  }

  open(product) {
    this.fun.setNavLink('buy');
    this.router.navigate(['/', 'home', 'tabs', 'buy', 'products', 'details', product.ProductID]);
  }

  async getTopSellingProducts() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetTopSellingProducts().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.products = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }


  GetRecentlyAddedProducts() {
    this.shopService.GetRecentlyAddedProducts().subscribe(res => {
      if (res.code === 200) {
        this.recentProducts = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
    })
  }
  GetFeaturedProducts() {
    this.shopService.GetFeaturedProducts().subscribe(res => {
      if (res.code === 200) {
        this.featuredProducts = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
    })
  }

  GetBestSellersProducts() {
    this.shopService.GetBestSellersProducts().subscribe(res => {
      if (res.code === 200) {
        this.bestsellerProducts = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
    })
  }

}
