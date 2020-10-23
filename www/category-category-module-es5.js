(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" slot=\"icon-only\" (click)=\"fun.navigate('cart')\" class=\"white ion-margin\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/category/category-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/home/category/category-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: CategoryPageRoutingModule */

    /***/
    function srcAppHomeCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
        return CategoryPageRoutingModule;
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


      var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category.page */
      "./src/app/home/category/category.page.ts");

      var routes = [{
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
      }];

      var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
        _classCallCheck(this, CategoryPageRoutingModule);
      };

      CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/category/category.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/home/category/category.module.ts ***!
      \**************************************************/

    /*! exports provided: CategoryPageModule */

    /***/
    function srcAppHomeCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
        return CategoryPageModule;
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


      var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-routing.module */
      "./src/app/home/category/category-routing.module.ts");
      /* harmony import */


      var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category.page */
      "./src/app/home/category/category.page.ts");

      var CategoryPageModule = function CategoryPageModule() {
        _classCallCheck(this, CategoryPageModule);
      };

      CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
      })], CategoryPageModule);
      /***/
    },

    /***/
    "./src/app/home/category/category.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/home/category/category.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/home/category/category.page.ts":
    /*!************************************************!*\
      !*** ./src/app/home/category/category.page.ts ***!
      \************************************************/

    /*! exports provided: CategoryPage */

    /***/
    function srcAppHomeCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
        return CategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../functions.service */
      "./src/app/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CategoryPage = /*#__PURE__*/function () {
        function CategoryPage(fun) {
          _classCallCheck(this, CategoryPage);

          this.fun = fun;
        }

        _createClass(CategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoryPage;
      }();

      CategoryPage.ctorParameters = function () {
        return [{
          type: _functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }];
      };

      CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category.page.scss */
        "./src/app/home/category/category.page.scss"))["default"]]
      })], CategoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=category-category-module-es5.js.map