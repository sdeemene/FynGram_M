import { AuthServiceService } from './service/auth-service.service';
import { DatalinkService } from './../datalink.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../data.service';
import { FunctionsService } from './../functions.service';
import { Platform, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser, Storage } = Plugins;
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {
  HAS_LOGGED_IN = 'hasLoggedIn';
  loginForm: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private data: DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
  }


  async signin() {
    if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await loading.present();
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          console.log(res);
          if (res.code === 200) {
            this.gotoHomePage(res.data);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          console.log(JSON.stringify(error));
          this.fun.presentToast(error);
        })


    } else {
      this.fun.presentToast('Wrong Input!');
    }

  }

  async openLink(link) {
    console.log(link);
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
    );
  }

  onOpen(link) {
    this.fun.navigate(link, true);
  }

  gotoHomePage(data) {
    Storage.set({ key: this.HAS_LOGGED_IN, value: 'true' });
    const name = this.authService.currentUserDataValue.name;
    const type = this.authService.currentUserDataValue.usertype;
    this.fun.presentToast('Welcome ' + name);
    this.fun.navigate('home', false);
    const event = new CustomEvent('user:login', { detail: { name, type }});
    return window.dispatchEvent(event);
  }
}
