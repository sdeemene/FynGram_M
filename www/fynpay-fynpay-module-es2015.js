(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fynpay-fynpay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white menu\" color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">FynPay Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onFund()\">\n        <ion-icon name=\"add-circle\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"mybg\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col class=\"ion-justify-content-center\">\n        <h6 class=\"small white ion-no-margin ion-text-center\">Main Balance</h6>\n        <h5 class=\"white amt ion-no-margin ion-text-center\">{{account?.MainBalance | currency:'₦' }}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Main FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.MainBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n\n  </ion-row>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Pending FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.PendingBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n  </ion-row>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Total In All Seller Accounts</strong></h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.TotalSellerBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </ion-row>\n  <ion-row class=\"ion-padding ion-no-padding-top\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Total In All Customer Accounts</strong></h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.TotalCustomerBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </ion-row>\n  <ion-row class=\"ion-padding ion-no-padding-top\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Total In All Shipping Accounts</strong></h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.TotalShippingEarnings | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </ion-row>\n  <ion-row class=\"ion-padding ion-no-padding-top\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Total In All Main Accounts</strong></h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.TotalMainWallets | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Total In All Pending Accounts</strong></h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.TotalPendingWallets | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white menu\" color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">FynPay Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onFund()\">\n        <ion-icon name=\"add-circle\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"mybg\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col class=\"ion-justify-content-center\">\n        <h6 class=\"small white ion-no-margin ion-text-center\">Main Balance</h6>\n        <h5 class=\"white amt ion-no-margin ion-text-center\">{{account?.MainBalance | currency:'₦' }}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Main FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.MainBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n\n  </ion-row>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Pending FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.PendingBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white menu\" color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">FynPay Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onFund()\">\n        <ion-icon name=\"add-circle\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"mybg\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col class=\"ion-justify-content-center\">\n        <h6 class=\"small white ion-no-margin ion-text-center\">Main Balance</h6>\n        <h5 class=\"white amt ion-no-margin ion-text-center\">{{account?.MainBalance | currency:'₦' }}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Main FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.MainBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n\n  </ion-row>\n  <ion-row class=\"ion-padding\">\n    <div class=\"full\">\n      <ion-item class=\"card\" lines=\"none\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col>\n            <ion-row>\n              <h6 class=\"off ion-no-margin\"><strong>Pending FynPay Account Balance</strong></h6>\n            </ion-row>\n            <ion-row>\n              <h6 class=\"off-small ion-no-margin\">{{account?.wallet_number}}</h6>\n            </ion-row>\n            <ion-row>\n              <div class=\"off-code\">\n                <h5 class=\"off-codein ion-no-margin\">{{account?.PendingBalance | currency:'₦' }}</h5>\n              </div>\n            </ion-row>\n          </ion-col>\n          <ion-text>\n            <h6 class=\"off-small bottom ion-no-margin\"><span><strong>{{account?.wallet_pin }}</strong></span></h6>\n          </ion-text>\n        </ion-row>\n      </ion-item>\n    </div>\n\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/adminwallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.module.ts ***!
  \*****************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/adminwallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/adminwallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amt {\n  font-size: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.hor-scroll {\n  height: 40px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 35vh;\n  left: 50%;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n  margin-bottom: 3px;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #423f3f;\n  margin: 0 12px !important;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  font-size: 21px;\n  text-decoration: underline;\n  font-weight: bold;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.light {\n  background-color: var(--ion-color-light);\n}\n\n.normal {\n  font-size: 15px;\n  margin-bottom: 9px;\n  display: block;\n}\n\n.bold {\n  font-weight: bold;\n  margin-bottom: 9px;\n  display: block;\n  font-size: 16px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segSection {\n  width: 100%;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width:0 !important;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.my-btn2 {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #5a5a5a;\n  margin: 0 12px !important;\n}\n\n.btn-active2 {\n  background-color: rgba(210, 210, 210, 0.5);\n  color: black !important;\n  font-weight: bold;\n  border-radius: 3px;\n  --indicator-color-checked:none !important;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.card {\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  padding: 6px;\n  background-color: white;\n}\n\n.head {\n  padding: 6px;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.img {\n  background-size: contain;\n  width: 90px;\n  align-self: center;\n}\n\n.toptext {\n  font-size: 21px;\n  margin-bottom: 6px;\n}\n\n.sub {\n  color: #787878;\n  font-size: 12px;\n}\n\n.sub2 {\n  font-size: 13px;\n}\n\n.off {\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.off-small {\n  font-size: 10px;\n  color: #787878;\n  margin-bottom: 5px;\n}\n\n.off-code {\n  background-color: rgba(210, 210, 210, 0.5);\n  border: 0.5px solid #b4b4b4;\n  margin-bottom: 5px;\n  padding: 3px;\n}\n\n.udanchuu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 3px;\n  border-radius: 10px;\n  height: 15px;\n}\n\n.mar-top {\n  margin-top: 3px;\n}\n\n.mycolor {\n  font-size: 15px;\n}\n\n.foot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.off-codein {\n  font-size: 10px;\n  color: #252323;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW53YWxsZXQvZnlucGF5L2Z5bnBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFVSjs7QUFUSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFXUjs7QUFSQTtFQUNJLHdDQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0FBZUo7O0FBYkE7RUFDSSwyQkFBQTtBQWdCSjs7QUFiQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQWdCSjs7QUFmSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFpQlI7O0FBZEE7RUFDSSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksdUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQW9CSjs7QUFsQkE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBcUJKOztBQW5CQTtFQUNJLHVCQUFBO0FBc0JKOztBQXBCQTtFQUNJLFlBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtBQTBCSjs7QUF4QkE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksZUFBQTtBQThCSjs7QUE1QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUErQko7O0FBN0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaUNKOztBQS9CQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBa0NKOztBQWhDQTtFQUNJLGVBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksZUFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBcUNKOztBQW5DQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBc0NKOztBQXBDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUF1Q0o7O0FBckNBO0VBQ0ksa0JBQUE7QUF3Q0o7O0FBdkNJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUF5Q1IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbndhbGxldC9meW5wYXkvZnlucGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbXQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5ob3Itc2Nyb2xse1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzV2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ubXktYnRue1xuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDY2LCA2MywgNjMpO1xuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG59XG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubm9ybWFsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4jZGFne1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNlZ1NlY3Rpb257XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6MCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5teS1idG57XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4ubXktYnRuMntcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xufVxuLmJ0bi1hY3RpdmUye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCwgLjUpO1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbn1cbiNkYWd7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4uY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmhlYWR7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi50b3B0ZXh0IHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnN1YiB7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc3ViMiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLm9mZiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5vZmYtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5vZmYtY29kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTAsIDIxMCwgMjEwLCAuNSk7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuLnVkYW5jaHV1IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTVweDtcbn1cbi5tYXItdG9wIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ubXljb2xvciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmZvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ub2ZmLWNvZGVpbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZ2IoMzcsIDM1LCAzNSk7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgIC5zZWdTZWN0aW9ue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6MzBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.page.ts":
/*!***************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.page.ts ***!
  \***************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let FynpayPage = class FynpayPage {
    constructor(router, fun, loadingCtrl, authService) {
        this.router = router;
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetWalletDetails(this.sid);
    }
    onFund() {
        this.router.navigate(['/', 'adminwallet', 'tabs', 'fynpay', 'new']);
    }
    GetWalletDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetWalletDetails(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.account = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.fun.presentToast(error);
            });
        });
    }
};
FynpayPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }
];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/adminwallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/customerwallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.module.ts ***!
  \********************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/customerwallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/customerwallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.page.scss":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amt {\n  font-size: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.hor-scroll {\n  height: 40px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 35vh;\n  left: 50%;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n  margin-bottom: 3px;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #423f3f;\n  margin: 0 12px !important;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  font-size: 21px;\n  text-decoration: underline;\n  font-weight: bold;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.light {\n  background-color: var(--ion-color-light);\n}\n\n.normal {\n  font-size: 15px;\n  margin-bottom: 9px;\n  display: block;\n}\n\n.bold {\n  font-weight: bold;\n  margin-bottom: 9px;\n  display: block;\n  font-size: 16px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segSection {\n  width: 100%;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width:0 !important;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.my-btn2 {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #5a5a5a;\n  margin: 0 12px !important;\n}\n\n.btn-active2 {\n  background-color: rgba(210, 210, 210, 0.5);\n  color: black !important;\n  font-weight: bold;\n  border-radius: 3px;\n  --indicator-color-checked:none !important;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.card {\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  padding: 6px;\n  background-color: white;\n}\n\n.head {\n  padding: 6px;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.img {\n  background-size: contain;\n  width: 90px;\n  align-self: center;\n}\n\n.toptext {\n  font-size: 21px;\n  margin-bottom: 6px;\n}\n\n.sub {\n  color: #787878;\n  font-size: 12px;\n}\n\n.sub2 {\n  font-size: 13px;\n}\n\n.off {\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.off-small {\n  font-size: 10px;\n  color: #787878;\n  margin-bottom: 5px;\n}\n\n.off-code {\n  background-color: rgba(210, 210, 210, 0.5);\n  border: 0.5px solid #b4b4b4;\n  margin-bottom: 5px;\n  padding: 3px;\n}\n\n.udanchuu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 3px;\n  border-radius: 10px;\n  height: 15px;\n}\n\n.mar-top {\n  margin-top: 3px;\n}\n\n.mycolor {\n  font-size: 15px;\n}\n\n.foot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.off-codein {\n  font-size: 10px;\n  color: #252323;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvZnlucGF5L2Z5bnBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFVSjs7QUFUSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFXUjs7QUFSQTtFQUNJLHdDQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0FBZUo7O0FBYkE7RUFDSSwyQkFBQTtBQWdCSjs7QUFiQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQWdCSjs7QUFmSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFpQlI7O0FBZEE7RUFDSSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksdUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQW9CSjs7QUFsQkE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBcUJKOztBQW5CQTtFQUNJLHVCQUFBO0FBc0JKOztBQXBCQTtFQUNJLFlBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtBQTBCSjs7QUF4QkE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksZUFBQTtBQThCSjs7QUE1QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUErQko7O0FBN0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaUNKOztBQS9CQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBa0NKOztBQWhDQTtFQUNJLGVBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksZUFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBcUNKOztBQW5DQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBc0NKOztBQXBDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUF1Q0o7O0FBckNBO0VBQ0ksa0JBQUE7QUF3Q0o7O0FBdkNJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUF5Q1IiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcndhbGxldC9meW5wYXkvZnlucGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbXQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5ob3Itc2Nyb2xse1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzV2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ubXktYnRue1xuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDY2LCA2MywgNjMpO1xuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG59XG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubm9ybWFsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4jZGFne1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNlZ1NlY3Rpb257XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6MCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5teS1idG57XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4ubXktYnRuMntcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xufVxuLmJ0bi1hY3RpdmUye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCwgLjUpO1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbn1cbiNkYWd7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4uY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmhlYWR7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi50b3B0ZXh0IHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnN1YiB7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc3ViMiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLm9mZiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5vZmYtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5vZmYtY29kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTAsIDIxMCwgMjEwLCAuNSk7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuLnVkYW5jaHV1IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTVweDtcbn1cbi5tYXItdG9wIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ubXljb2xvciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmZvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ub2ZmLWNvZGVpbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZ2IoMzcsIDM1LCAzNSk7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgIC5zZWdTZWN0aW9ue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6MzBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.page.ts":
/*!******************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.page.ts ***!
  \******************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let FynpayPage = class FynpayPage {
    constructor(router, fun, loadingCtrl, authService) {
        this.router = router;
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetWalletDetails(this.sid);
    }
    onFund() {
        this.router.navigate(['/', 'customerwallet', 'tabs', 'fynpay', 'new']);
    }
    GetWalletDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetWalletDetails(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.account = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.fun.presentToast(error);
            });
        });
    }
};
FynpayPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }
];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/customerwallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/sellerswallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.module.ts ***!
  \*******************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/sellerswallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/sellerswallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amt {\n  font-size: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.hor-scroll {\n  height: 40px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 35vh;\n  left: 50%;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n  margin-bottom: 3px;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #423f3f;\n  margin: 0 12px !important;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  font-size: 21px;\n  text-decoration: underline;\n  font-weight: bold;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.light {\n  background-color: var(--ion-color-light);\n}\n\n.normal {\n  font-size: 15px;\n  margin-bottom: 9px;\n  display: block;\n}\n\n.bold {\n  font-weight: bold;\n  margin-bottom: 9px;\n  display: block;\n  font-size: 16px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segSection {\n  width: 100%;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width:0 !important;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.my-btn2 {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #5a5a5a;\n  margin: 0 12px !important;\n}\n\n.btn-active2 {\n  background-color: rgba(210, 210, 210, 0.5);\n  color: black !important;\n  font-weight: bold;\n  border-radius: 3px;\n  --indicator-color-checked:none !important;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.card {\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  padding: 6px;\n  background-color: white;\n}\n\n.head {\n  padding: 6px;\n  background-color: white;\n}\n\n.full {\n  width: 100%;\n}\n\n.img {\n  background-size: contain;\n  width: 90px;\n  align-self: center;\n}\n\n.toptext {\n  font-size: 21px;\n  margin-bottom: 6px;\n}\n\n.sub {\n  color: #787878;\n  font-size: 12px;\n}\n\n.sub2 {\n  font-size: 13px;\n}\n\n.off {\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.off-small {\n  font-size: 10px;\n  color: #787878;\n  margin-bottom: 5px;\n}\n\n.off-code {\n  background-color: rgba(210, 210, 210, 0.5);\n  border: 0.5px solid #b4b4b4;\n  margin-bottom: 5px;\n  padding: 3px;\n}\n\n.udanchuu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 3px;\n  border-radius: 10px;\n  height: 15px;\n}\n\n.mar-top {\n  margin-top: 3px;\n}\n\n.mycolor {\n  font-size: 15px;\n}\n\n.foot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.off-codein {\n  font-size: 10px;\n  color: #252323;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9meW5wYXkvZnlucGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0FBU0o7O0FBUEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQVVKOztBQVRJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQVdSOztBQVJBO0VBQ0ksd0NBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksdUJBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7QUFlSjs7QUFiQTtFQUNJLDJCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0FBZ0JKOztBQWZJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQWlCUjs7QUFkQTtFQUNJLGVBQUE7QUFpQko7O0FBZkE7RUFDSSx1QkFBQTtBQWtCSjs7QUFoQkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBb0JKOztBQWxCQTtFQUNJLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFxQko7O0FBbkJBO0VBQ0ksdUJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksWUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBd0JKOztBQXRCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxXQUFBO0FBMEJKOztBQXhCQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBMkJKOztBQXpCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTRCSjs7QUExQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxlQUFBO0FBOEJKOztBQTVCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksZUFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxlQUFBO0FBb0NKOztBQWxDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFzQ0o7O0FBcENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxrQkFBQTtBQXdDSjs7QUF2Q0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXlDUiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvZnlucGF5L2Z5bnBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW10IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4ubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1dmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLm15LWJ0bntcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYig2NiwgNjMsIDYzKTtcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5idG4tYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuLmxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLm5vcm1hbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuI2RhZ3tcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5zZWdTZWN0aW9ue1xuICAgIHdpZHRoOjEwMCU7XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAgIC0tYm9yZGVyLXdpZHRoOjAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tdGV4dHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubXktYnRue1xuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLm15LWJ0bjJ7XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbn1cbi5idG4tYWN0aXZlMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTAsIC41KTtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG59XG4jZGFne1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLmhvci1zY3JvbGx7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFke1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbWcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogOTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udG9wdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5zdWIge1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnN1YjIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5vZmYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub2ZmLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub2ZmLWNvZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCwgLjUpO1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cbi51ZGFuY2h1dSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFyLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuLm15Y29sb3Ige1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5mb290IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm9mZi1jb2RlaW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmdiKDM3LCAzNSwgMzUpO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogM3B4O1xuICAgIHJpZ2h0OiAzcHg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9ue1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAuc2VnU2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.page.ts ***!
  \*****************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");






let FynpayPage = class FynpayPage {
    constructor(router, fun, loadingCtrl, authService) {
        this.router = router;
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetWalletDetails(this.sid);
    }
    onFund() {
        this.router.navigate(['/', 'sellerswallet', 'tabs', 'fynpay', 'new']);
    }
    GetWalletDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetWalletDetails(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.account = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.fun.presentToast(error);
            });
        });
    }
};
FynpayPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }
];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/sellerswallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ })

}]);
//# sourceMappingURL=fynpay-fynpay-module-es2015.js.map