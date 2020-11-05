import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { ReviewsService } from './../../services/reviews.service';
import { FunctionsService } from './../../services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  show = true;
  reviews: any;
  sid: any;
  constructor(private fun: FunctionsService,
    private authService: AuthServiceService,
    private reviewsService: ReviewsService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetUserReviewList(this.sid);
  }

  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  computeRatings2(ratenumber) {
    return this.fun.array(5 - parseInt(ratenumber));
  }

  shop() {
    this.fun.navigate('home');
  }
  async GetUserReviewList(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.reviewsService.GetUserReviewList(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.reviews = res.data;
          this.show = true;
        } else {
          this.fun.presentToast(res.msg);
          this.show = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
        console.log(JSON.stringify(error));
      })
  }

  async onDelete(review) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    this.fun.removeConform('review').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.reviewsService.DeleteReview(String(review.id))
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserReviewList(this.sid);
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
}
