import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ResponseType } from './../../interfaces/response';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(
    private http: HttpClient, private nativeHttp: HTTP,
     private platform: Platform
  ) {

  }


  GetPayments(sid): Observable<ResponseType> {
    const url = environment.url + 'MPaymentServlet';
    const type = 'GetPayments';
    // if (this.platform.is("android")) {
    // const data = {
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  DeletePayment(paymentid): Observable<ResponseType> {
    const url = environment.url + 'MPaymentServlet';
    const type = 'DeletePayment';
    // if (this.platform.is("android")) {
    // const data = {
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ type, paymentid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
}