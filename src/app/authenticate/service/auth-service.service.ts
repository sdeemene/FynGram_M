import { environment } from './../../../environments/environment';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { from } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private nativeHttp: HTTP,
    private platform: Platform,
    public http: HttpClient, ) { }


  login(emailphone, password) {
    let url = environment.ngrok + "MUserServlet";
    let type = "Login";
    if (this.platform.is("android")) {
      let data = {
        emailphone: emailphone,
        password: password,
        type: type
      };
      this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
      return from(nativeCall).pipe(
        map(result => {
          return JSON.parse(result.data);
        })
      )
    } else {
      let data = JSON.stringify({ emailphone, password, type });
      return this.http.post(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
}
