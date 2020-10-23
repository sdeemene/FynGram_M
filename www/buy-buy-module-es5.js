(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeBuyBuyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar  color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons>\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title class=\"white\">Fyngram</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"fun.navigate('cart')\" >\n        <ion-icon name=\"cart\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button (click)=\"side_open()\">\n        <ion-icon name=\"ellipsis-vertical-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar  color=\"mytheme\">\n    <ion-searchbar color=\"light\" (click)=\"fun.navigate('search')\"  placeholder=\"I'm shopping for...\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Top Selling Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let spon of sponsored\" class=\"container-inner\">\n        <img [src]=\"spon.image[0]\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{spon.name}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-slides [options]=\"slideOptsOne\">\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider7.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider12.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider10.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n   </ion-slides>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Recently Added Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let spon of sponsored\" class=\"container-inner\">\n        <img [src]=\"spon.image[0]\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{spon.name}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-card class=\"ion-no-padding ion-no-margin\">\n    <img src=\"/assets/images/slider7.jpg\" />\n  </ion-card>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Featured Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let spon of sponsored\" class=\"container-inner\">\n        <img [src]=\"spon.image[0]\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{spon.name}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-card class=\"ion-no-padding ion-no-margin\">\n    <img src=\"/assets/images/slider10.jpg\" />\n  </ion-card>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Best Sellers' Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let spon of sponsored\" class=\"container-inner\">\n        <img [src]=\"spon.image[0]\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{spon.name}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-slides [options]=\"slideOptsOne\">\n    <ion-slide>\n      <ion-card >\n        <ion-img src=\"/assets/images/slider7.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card >\n        <ion-img src=\"/assets/images/slider12.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card >\n        <ion-img src=\"/assets/images/slider10.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n   </ion-slides>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/buy/buy-routing.module.ts":
    /*!************************************************!*\
      !*** ./src/app/home/buy/buy-routing.module.ts ***!
      \************************************************/

    /*! exports provided: BuyPageRoutingModule */

    /***/
    function srcAppHomeBuyBuyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyPageRoutingModule", function () {
        return BuyPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _buy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buy.page */
      "./src/app/home/buy/buy.page.ts");

      var routes = [{
        path: '',
        component: _buy_page__WEBPACK_IMPORTED_MODULE_3__["BuyPage"]
      }];

      var BuyPageRoutingModule = function BuyPageRoutingModule() {
        _classCallCheck(this, BuyPageRoutingModule);
      };

      BuyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/buy/buy.module.ts":
    /*!****************************************!*\
      !*** ./src/app/home/buy/buy.module.ts ***!
      \****************************************/

    /*! exports provided: BuyPageModule */

    /***/
    function srcAppHomeBuyBuyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyPageModule", function () {
        return BuyPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buy-routing.module */
      "./src/app/home/buy/buy-routing.module.ts");
      /* harmony import */


      var _buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buy.page */
      "./src/app/home/buy/buy.page.ts");

      var BuyPageModule = function BuyPageModule() {
        _classCallCheck(this, BuyPageModule);
      };

      BuyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPageRoutingModule"]],
        declarations: [_buy_page__WEBPACK_IMPORTED_MODULE_6__["BuyPage"]]
      })], BuyPageModule);
      /***/
    },

    /***/
    "./src/app/home/buy/buy.page.scss":
    /*!****************************************!*\
      !*** ./src/app/home/buy/buy.page.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeBuyBuyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked: none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.view {\n  color: var(--ion-color-mytheme);\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 1px;\n  background-color: #d2d2d2;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 110px;\n  max-width: 110px;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 120px;\n  max-height: 120px;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nion-toolbar .sc-ion-searchbar-ios-h {\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvYnV5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQUlGOztBQUhFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0UsdUJBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBWUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2J1eS9idXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaG9yLXNjcm9sbCB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5tZW51IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubXktYnRuIHtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5idG4tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcbiAgaW9uLXRleHQge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG59XG4jZGFnIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zZWdtZW50dG9vbGJhclNlY3Rpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG4gIC5zZWdTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICB9XG59XG4udmlldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDExMHB4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogM3B4O1xufVxuLnRleHQtdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgcGFkZGluZy10b3A6IDFweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTJweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/buy/buy.page.ts":
    /*!**************************************!*\
      !*** ./src/app/home/buy/buy.page.ts ***!
      \**************************************/

    /*! exports provided: BuyPage */

    /***/
    function srcAppHomeBuyBuyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyPage", function () {
        return BuyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../functions.service */
      "./src/app/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var BuyPage = /*#__PURE__*/function () {
        function BuyPage(menuCtrl, fun, dataService) {
          _classCallCheck(this, BuyPage);

          this.menuCtrl = menuCtrl;
          this.fun = fun;
          this.dataService = dataService;
          this.sponsored = [];
          this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
          };
          this.sponsored = dataService.sponsored;
          console.log(this.sponsored);
        }

        _createClass(BuyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "side_open",
          value: function side_open() {
            this.menuCtrl.toggle('end');
          }
        }]);

        return BuyPage;
      }();

      BuyPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      };

      BuyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./buy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./buy.page.scss */
        "./src/app/home/buy/buy.page.scss"))["default"]]
      })], BuyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=buy-buy-module-es5.js.map