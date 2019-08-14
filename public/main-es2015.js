(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <div class=\"content-body\"> -->\n    <div class=\"container-fluid \">\n        <flash-messages></flash-messages>\n    </div>\n        <router-outlet></router-outlet>\n    <!-- </div> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/accountset/accountset.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/accountset/accountset.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accountset works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div>\n    <!-- Sidebar -->\n      <ul class=\"navbar-nav d-flex flex-column bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n            <!-- Sidebar - Brand -->\n            <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"#\">\n              <div class=\"sidebar-brand-icon rotate-n-15\">\n                <i class=\"fas fa-laugh-wink\"></i>\n              </div>\n              <div class=\"sidebar-brand-text mx-3\"> Supplier Pay</div>\n            </a>\n    \n            <!-- Divider -->\n            <hr class=\"sidebar-divider my-0\">\n    \n            <!-- Nav Item - Dashboard -->\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLink] = \"['/dashboard']\">\n                <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n                <span>Dashboard</span></a>\n            </li>\n    \n            <!-- Divider -->\n            <hr class=\"sidebar-divider\">\n    \n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/makepay']\">\n                    <i class=\"far fa-money-bill-alt\"></i>\n                    <span>Make Payment</span></a>\n            </li>\n\n            \n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/managesup']\">\n                    <i class=\"fas fa-fw fa-wrench\"></i>\n                    <span>Manage Suppliers</span></a>\n            </li>\n\n            <!-- <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/accountset']\">\n                    <i class=\"fas fa-fw fa-wrench\"></i>\n                    <span>Account Settings</span></a>\n            </li> -->\n                \n          \n    \n      </ul>\n    <!-- End of Sidebar -->\n    </div>\n\n\n    <!-- Begin Page Content -->\n    <div class=\"d-flex flex-column boxup  mr-3\">\n        <!-- Page Heading -->\n        <div class=\" mt-4\">\n            <h1 class=\"h3 mb-0 text-center\">Your Dashboard</h1>\n            <!-- <h3 class=\"\"> Your Supplier Pay Dashboard</h3> -->\n            <!-- <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a> -->\n\n            <div class=\"card-header py-3\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Payment History</h6>\n            </div>\n\n                <div class=\"table-responsive dash-table\" >\n                <table class=\"table table-bordered\" id=\"dataTable\"  width=\"100%\"  cellspacing=\"0\">\n                    <thead>\n                    <tr>\n                        <th>Supplier</th>\n                        <th>Purpose</th>\n                        <th>Amount</th>\n                        <th>Date</th>\n                    </tr>\n                    </thead>\n                    <!-- <tfoot>\n                    <tr>\n                        <th>Supplier</th>\n                        <th>Purpose</th>\n                        <th>Amount</th>\n                        <th>Date</th>\n                    </tr>\n                    </tfoot> -->\n                    <tbody>\n                    <tr *ngFor=\"let payment of payData\">\n                        <td>{{payment.supplier}}</td>\n                        <td>{{payment.purpose}}</td>\n                        <td>{{payment.amount}}</td>\n                        <td>{{payment.date}}</td>\n                        <!-- <td>{{               }}</td> -->\n                    </tr>\n            \n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid jumb-home\">\n    <div class=\"\"></div>\n    <div class=\"container\">\n        <div class=\"jumb-text text-center\">\n            <h1 class=\"display-4\">Supplier Pay</h1>\n            <p class=\"lead\">Vendor Payment Solution</p>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <h3 class=\"text-center mb-4\"> Features</h3>\n    <div class=\"row\">\n    <div class=\"col-md-4 mb-4\">\n        <div class=\"card bg-primary text-white\">\n            <div class=\"card-body text-center\">\n                <i class=\"fas fa-tachometer-alt fa-4x\"></i> <br>\n                <h5 class=\"mt-1\">Fast</h5> \n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 mb-4\">\n        <div class=\"card bg-primary text-white\">\n                <div class=\"card-body text-center\">\n  \n                <i class=\"far fa-credit-card fa-4x\"></i> <br>\n                <h5 class=\"mt-1\">Efficient</h5>\n                </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 mb-4\">\n        <div class=\"card bg-primary text-white\">\n            <div class=\"card-body text-center\">\n            <i class=\"fab fa-expeditedssl fa-4x\"></i> <br>\n            <h5 class=\"mt-1\">Safe</h5> \n            </div>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <!-- Outer Row -->\n        <div class=\"row justify-content-center\">\n    \n          <div class=\"col-xl-10 col-lg-12 col-md-9\">\n    \n            <div class=\"card o-hidden border-0 shadow-lg my-5\">\n              <div class=\"card-body p-0\">\n                <!-- Nested Row within Card Body -->\n                <div class=\"row\">\n                  <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"p-5\">\n                      <div class=\"text-center\">\n                        <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\n                      </div>\n                        <form class=\"user\" #login=\"ngForm\" (ngSubmit) = \"onLoginSubmit(login.value)\">\n                            <div class=\"form-group\">\n                                 <input type=\"username\" class=\"form-control form-control-user\" ngModel name=\"username\" placeholder=\"Enter your username...\">\n                            </div>\n                            <div class=\"form-group\">\n                                 <input type=\"password\" class=\"form-control form-control-user\" ngModel name=\"password\"  placeholder=\"Password\">\n                            </div>\n   \n                            <button type=\"submit\" class=\"btn btn-primary btn-user btn-block\">Login</button>\n                        </form>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n       </div>\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/makepay/makepay.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/makepay/makepay.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Sidebar -->\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n            <!-- Sidebar - Brand -->\n            <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"#\">\n              <div class=\"sidebar-brand-icon rotate-n-15\">\n                <i class=\"fas fa-laugh-wink\"></i>\n              </div>\n              <div class=\"sidebar-brand-text mx-3\"> Supplier Pay</div>\n            </a>\n    \n            <!-- Divider -->\n            <hr class=\"sidebar-divider my-0\">\n    \n            <!-- Nav Item - Dashboard -->\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLink] = \"['/dashboard']\">\n                <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n                <span>Dashboard</span></a>\n            </li>\n    \n            <!-- Divider -->\n            <hr class=\"sidebar-divider\">\n    \n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/makepay']\">\n                    <i class=\"far fa-money-bill-alt\"></i>\n                    <span>Make Payment</span></a>\n            </li>\n\n            \n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/managesup']\">\n                    <i class=\"fas fa-fw fa-wrench\"></i>\n                    <span>Manage Suppliers</span></a>\n            </li>\n\n            <!-- <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink] = \"['/accountset']\">\n                    <i class=\"fas fa-fw fa-wrench\"></i>\n                    <span>Account Settings</span></a>\n            </li> -->\n                \n          \n    \n      </ul>\n    <!-- End of Sidebar -->\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid flex column boxup mr-4\">\n                <!-- Page Heading -->\n                <div class=\" mt-4\">\n                    <h1 class=\"h3 mb-0 text-center\">Make Payment</h1>\n                    <!-- <h3 class=\"\"> Your Supplier Pay Dashboard</h3> -->\n                    <!-- <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a> -->\n        \n                    <!-- <div class=\"card-header py-3\">\n                        <h6 class=\"m-0 font-weight-bold text-primary\">Payment History</h6>\n                    </div> -->\n                    <div class=\"basic-form\">\n                        <form #makepay =\"ngForm\" (ngSubmit) = \"onPaymentSubmit(makepay.value)\">\n                            <div class=\"alert-danger text-center\">\n                                    {{errorMsg}}\n                            </div>\n                            <div class=\"alert-success text-center\">\n                                    {{successMsg}}\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-12\">\n                                    <label>Supplier</label>\n                                    <select id=\"inputState\" class=\"form-control\" ngModel name=\"supplier\" >\n                                        <option selected=\"selected\" >Choose Supplier</option>\n                                        <option *ngFor=\"let supplier of supplierData\">{{supplier.name}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label>Purpose</label>\n                                    <input type=\"text\" class=\"form-control\" ngModel name=\"purpose\" placeholder=\"Enter Purpose of Payment\">\n                                </div>\n                                <div class=\"form-group col-md-6\">\n                                    <label>Amount</label>\n                                    <input type=\"text\" class=\"form-control\" ngModel name=\"amount\" placeholder=\"Enter amount\">\n                                </div>\n                            </div>\n    \n\n                            <button type=\"submit\" class=\"btn btn-dark\">Pay Supplier</button>\n                        </form>\n                    </div>\n                   \n                </div>\n        </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/managesup/managesup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/managesup/managesup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Sidebar -->\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n        <!-- Sidebar - Brand -->\n        <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n          <div class=\"sidebar-brand-icon rotate-n-15\">\n            <i class=\"fas fa-laugh-wink\"></i>\n          </div>\n          <div class=\"sidebar-brand-text mx-3\"> Supplier Pay</div>\n        </a>\n\n        <!-- Divider -->\n        <hr class=\"sidebar-divider my-0\">\n\n        <!-- Nav Item - Dashboard -->\n        <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/dashboard']\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span></a>\n        </li>\n\n        <!-- Divider -->\n        <hr class=\"sidebar-divider\">\n\n        <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/makepay']\">\n                <i class=\"far fa-money-bill-alt\"></i>\n                <span>Make Payment</span></a>\n        </li>\n\n        \n        <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/managesup']\">\n                <i class=\"fas fa-fw fa-wrench\"></i>\n                <span>Manage Suppliers</span></a>\n        </li>\n\n        <!-- <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/accountset']\">\n                <i class=\"fas fa-fw fa-wrench\"></i>\n                <span>Account Settings</span></a>\n        </li> -->\n            \n      \n\n  </ul>\n<!-- End of Sidebar -->\n\n    <!-- Begin Page Content -->\n    <div class=\"container-fluid flex column boxup mr-4\">\n            <!-- Page Heading -->\n            <div class=\" mt-4\">\n                <h1 class=\"h3 mb-0 text-center\">Manage Suppliers</h1>\n                <!-- <h3 class=\"\"> Your Supplier Pay Dashboard</h3> -->\n                <!-- <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a> -->\n    \n                <!-- <div class=\"card-header py-3\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Payment History</h6>\n                </div> -->\n                <!-- <div class=\"basic-form\">\n                    <form #makepay =\"ngForm\" (ngSubmit) = \"onPaymentSubmit(makepay.value)\">\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-12\">\n                                <label>Supplier</label>\n                                <select id=\"inputState\" class=\"form-control\" ngModel name=\"supplier\" >\n                                    <option selected=\"selected\" >Choose Supplier</option>\n                                    <option *ngFor=\"let supplier of supplierData\">{{supplier.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label>Purpose</label>\n                                <input type=\"text\" class=\"form-control\" ngModel name=\"purpose\" placeholder=\"Enter Purpose of Payment\">\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label>Amount</label>\n                                <input type=\"text\" class=\"form-control\" ngModel name=\"amount\" placeholder=\"Enter amount\">\n                            </div>\n                        </div>\n\n\n                        <button type=\"submit\" class=\"btn btn-dark\">Pay Supplier</button>\n                    </form>\n                </div> -->\n               \n                <div class=\"row\">\n                        <div class=\"my-2\"></div>\n                        <a href=\"#\" class=\"btn btn-primary btn-icon-split\"  data-toggle=\"modal\" data-target=\"#addModal\">\n                          <span class=\"icon text-white-50\">\n                            <i class=\"fas fa-plus\"></i>\n                          </span>\n                          <span class=\"text\">Add Suppliers</span>\n                        </a>\n                        <div class=\"my-2\"></div>    \n                </div>\n                <div class=\"row mt-4\">\n\n                        <div class=\"table-responsive dash-table\" >\n                                <table class=\"table table-bordered\" id=\"dataTable\"  width=\"100%\"  cellspacing=\"0\">\n                                    <thead>\n                                    <tr>\n                                        <th>Supplier</th>\n                                        <th>Function</th>\n                                        <th>Account Number</th>\n                                        <th></th>\n                                    </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                                    <tr>\n                                        <th>Supplier</th>\n                                        <th>Purpose</th>\n                                        <th>Amount</th>\n                                        <th>Date</th>\n                                    </tr>\n                                    </tfoot> -->\n                                    <tbody>\n                                    <tr *ngFor=\"let supplier of supplierData\">\n                                        <td>{{supplier.name}}</td>\n                                        <td>{{supplier.category}}</td>\n                                        <td>{{supplier.nuban}}</td>\n                                         <td>\n                                            <a href=\"\" class=\"\"><i class=\"fas fa-edit\"></i></a> &nbsp;\n                                            <a href=\"\" class=\"\"><i class=\"fas fa-trash-alt\"></i></a> \n                                          </td> \n                                    </tr>\n                            \n                                    </tbody>\n                                </table>\n                            </div>\n                </div>\n            </div>\n    </div>\n\n    <!-- Add Supplier Modal-->\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add New Supplier</h5>\n              <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">×</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <div class=\"basic-form\">\n                        <form #managesup =\"ngForm\" (ngSubmit) = \"onSupplierSubmit(managesup.value)\">\n                            <div class=\"alert-danger text-center\">\n                                    {{errorMsg}}\n                            </div>\n                            <div class=\"alert-success text-center\">\n                                    {{successMsg}}\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-12\">\n                                    <label>Name</label>\n                                    <input type=\"text\" class=\"form-control\" ngModel name=\"name\" placeholder=\"Enter name of supplier\">\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-12\">\n                                    <label>Function</label>\n                                    <input type=\"text\" class=\"form-control\" ngModel name=\"category\" placeholder=\"Food Vendor\">\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label>Bank Code</label>\n                                    <input type=\"text\" class=\"form-control\" ngModel name=\"bank\" placeholder=\"000\">\n                                </div>\n                                <div class=\"form-group col-md-6\">\n                                        <label>Account Number</label>\n                                        <input type=\"text\" class=\"form-control\" ngModel name=\"nuban\" placeholder=\"00000000000\">\n                                </div>\n                            </div>\n                            \n                            <button type=\"submit\" class=\"btn btn-dark\">Add Supplier</button>\n                        </form>\n                    </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n              <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n              <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!-- Topbar -->\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar static-top shadow\">\n\n                <!-- Sidebar Toggle (Topbar) -->\n                <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                  <i class=\"fa fa-bars\"></i>\n                </button>\n    \n                <ul class=\"navbar-nav ml-auto\">\n      \n \n                  <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" >\n                        Hi, {{user}}\n                  </li>\n                  <!-- <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                        <a class=\"nav-link\"  [routerLink] = \"['/dashboard']\">Dashboard</a>\n                    </li> -->\n                    <li class=\"nav-item\"  *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                        <a class=\"nav-link\" [routerLink] = \"['/login']\">Sign In</a>\n                    </li>\n                    <li class=\"nav-item\"  *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                        <a class=\"nav-link\" [routerLink] = \"['/register']\">Register</a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" ><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n                    </li>\n \n      \n                </ul>\n      \n        </nav>\n        <!-- End of Topbar -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <div class=\"container\">\n      \n          <div class=\"card o-hidden border-0 shadow-lg my-5\">\n            <div class=\"card-body p-0\">\n              <!-- Nested Row within Card Body -->\n              <div class=\"row\">\n                <div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div>\n                <div class=\"col-lg-7\">\n                  <div class=\"p-5\">\n                    <div class=\"text-center\">\n                      <h1 class=\"h4 text-gray-900 mb-4\">Create an Account!</h1>\n                    </div>\n                    <form #register =\"ngForm\" (ngSubmit) = \"onRegisterSubmit(register.value)\">\n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-6 mb-3 mb-sm-0\"> \n                                        <input type=\"text\" class=\"form-control form-control-user\" ngModel name=\"name\" placeholder=\"name \">\n                                </div>\n                                <div class=\"col-sm-6\">\n                                        <input type=\"text\" class=\"form-control form-control-user\" ngModel name=\"username\" placeholder=\"username\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control form-control-user\"  ngModel name=\"email\" placeholder=\"Email Address\">\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                                    <input type=\"password\" class=\"form-control form-control-user\" ngModel name=\"password\"  placeholder=\"Password\">\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"password\" class=\"form-control form-control-user\" ngModel name=\"rpassword\" placeholder=\"Repeat Password\">\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary btn-user btn-block\">Register</button>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n         </div>\n    </div>\n      \n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on("load", function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#preloader').fadeOut(500);
            jquery__WEBPACK_IMPORTED_MODULE_2__('#main-wrapper').addClass('show');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').attr('data-sidebar-style') === "mini" ? jquery__WEBPACK_IMPORTED_MODULE_2__(".hamburger").addClass('is-active') : jquery__WEBPACK_IMPORTED_MODULE_2__(".hamburger").removeClass('is-active');
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_makepay_makepay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/makepay/makepay.component */ "./src/app/components/makepay/makepay.component.ts");
/* harmony import */ var _components_managesup_managesup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/managesup/managesup.component */ "./src/app/components/managesup/managesup.component.ts");
/* harmony import */ var _components_accountset_accountset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/accountset/accountset.component */ "./src/app/components/accountset/accountset.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/payment.service */ "./src/app/services/payment.service.ts");






















const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'makepay', component: _components_makepay_makepay_component__WEBPACK_IMPORTED_MODULE_15__["MakepayComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'managesup', component: _components_managesup_managesup_component__WEBPACK_IMPORTED_MODULE_16__["ManagesupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'accountset', component: _components_accountset_accountset_component__WEBPACK_IMPORTED_MODULE_17__["AccountsetComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] }
];
function tokenGetter() {
    return localStorage.getItem('id_token');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _components_makepay_makepay_component__WEBPACK_IMPORTED_MODULE_15__["MakepayComponent"],
            _components_managesup_managesup_component__WEBPACK_IMPORTED_MODULE_16__["ManagesupComponent"],
            _components_accountset_accountset_component__WEBPACK_IMPORTED_MODULE_17__["AccountsetComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter
                }
            }),
            angular4_paystack__WEBPACK_IMPORTED_MODULE_8__["Angular4PaystackModule"]
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _services_payment_service__WEBPACK_IMPORTED_MODULE_21__["PaymentService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/accountset/accountset.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/accountset/accountset.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudHNldC9hY2NvdW50c2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/accountset/accountset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/accountset/accountset.component.ts ***!
  \***************************************************************/
/*! exports provided: AccountsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsetComponent", function() { return AccountsetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountsetComponent = class AccountsetComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accountset',
        template: __webpack_require__(/*! raw-loader!./accountset.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/accountset/accountset.component.html"),
        styles: [__webpack_require__(/*! ./accountset.component.css */ "./src/app/components/accountset/accountset.component.css")]
    })
], AccountsetComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");








let DashboardComponent = class DashboardComponent {
    constructor(validateService, flashMessage, authService, router, paymentService, supplierService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.paymentService = paymentService;
        this.supplierService = supplierService;
    }
    ngOnInit() {
        //Get Payments from Database
        this.paymentService.getPayments().subscribe((data) => {
            this.payData = data;
            // console.log(data);
            // this.flashMessage.show('You are now register and can log in', {cssClass: 'alert-success', timeout:3000});
            // this.router.navigate(['/login']); 
        }, error => {
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/register']);}
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"] },
    { type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onLoginSubmit(value) {
        const user = {
            username: value.username,
            password: value.password
        };
        // console.log(user);
        // Authenticate Users
        this.authService.authenticateUser(user).subscribe((data) => {
            // data =JSON.stringify(data);
            //  console.log(data.token);
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/dashboard']);
        }, error => {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/login']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/makepay/makepay.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/makepay/makepay.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFrZXBheS9tYWtlcGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/makepay/makepay.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/makepay/makepay.component.ts ***!
  \*********************************************************/
/*! exports provided: MakepayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakepayComponent", function() { return MakepayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");








let MakepayComponent = class MakepayComponent {
    constructor(validateService, flashMessage, authService, router, paymentService, supplierService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.paymentService = paymentService;
        this.supplierService = supplierService;
    }
    ngOnInit() {
        //Get List of Suppliet from Database
        this.supplierService.getSuppliers().subscribe((data) => {
            this.supplierData = data;
            // console.log(data);
            // this.flashMessage.show('You are now register and can log in', {cssClass: 'alert-success', timeout:3000});
            // this.router.navigate(['/login']); 
        }, error => {
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/register']);}
        });
    }
    onPaymentSubmit(formData) {
        const payment = {
            supplier: formData.supplier,
            purpose: formData.purpose,
            amount: formData.amount
        };
        // console.log(payment);
        //Required Field
        if (!this.validateService.validatePayment(payment)) {
            this.errorMsg = "Please fill in all fields";
            // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
            return false;
        }
        this.paymentService.makePayments(payment).subscribe(data => {
            this.successMsg = "Payment Successful";
            // this.flashMessage.show('Payment Successful', {cssClass: 'alert-success', timeout:3000});
            this.router.navigate(['/makepay']);
        }, error => {
            this.errorMsg = "Something went wrong";
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/makepay']);
        });
    }
};
MakepayComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"] },
    { type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"] }
];
MakepayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-makepay',
        template: __webpack_require__(/*! raw-loader!./makepay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/makepay/makepay.component.html"),
        styles: [__webpack_require__(/*! ./makepay.component.css */ "./src/app/components/makepay/makepay.component.css")]
    })
], MakepayComponent);



/***/ }),

/***/ "./src/app/components/managesup/managesup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/managesup/managesup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlc3VwL21hbmFnZXN1cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/managesup/managesup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/managesup/managesup.component.ts ***!
  \*************************************************************/
/*! exports provided: ManagesupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagesupComponent", function() { return ManagesupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/payment.service */ "./src/app/services/payment.service.ts");








let ManagesupComponent = class ManagesupComponent {
    constructor(validateService, flashMessage, authService, router, supplierService, paymentService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.supplierService = supplierService;
        this.paymentService = paymentService;
    }
    ngOnInit() {
        //Get List of Suppliet from Database
        this.supplierService.getSuppliers().subscribe((data) => {
            this.supplierData = data;
            console.log(data);
            // this.flashMessage.show('You are now register and can log in', {cssClass: 'alert-success', timeout:3000});
            // this.router.navigate(['/login']); 
        }, error => {
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/register']);}
        });
    }
    onSupplierSubmit(formData) {
        const supplier = {
            name: formData.name,
            category: formData.category,
            bank: formData.bank,
            nuban: formData.nuban
        };
        console.log(supplier);
        //Required Field
        if (!this.validateService.validateSupplier(supplier)) {
            this.errorMsg = "Please fill in the fields";
            // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
            return false;
        }
        //Add Supplier
        this.supplierService.makeSupplier(supplier).subscribe(data => {
            this.successMsg = "Supplier add";
            // this.flashMessage.show('You are now register and can log in', {cssClass: 'alert-success', timeout:3000});
            this.router.navigate(['/managesup']);
        }, error => {
            this.errorMsg = "Something went wrong";
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/managesup']);
        });
    }
};
ManagesupComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"] },
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] }
];
ManagesupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managesup',
        template: __webpack_require__(/*! raw-loader!./managesup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/managesup/managesup.component.html"),
        styles: [__webpack_require__(/*! ./managesup.component.css */ "./src/app/components/managesup/managesup.component.css")]
    })
], ManagesupComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        // this.authService.getProfile().subscribe({
        //   (data: any) =>{
        //   },
        //   error=>{
        //   }
        // })
        this.authService.getProfile().subscribe((data) => {
            this.userData = data;
            console.log(data);
            // this.flashMessage.show('You are now register and can log in', {cssClass: 'alert-success', timeout:3000});
            // this.router.navigate(['/login']); 
        }, error => {
            // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
            // this.router.navigate(['/register']);}
        });
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit(formData) {
        const user = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            rpassword: formData.rpassword
        };
        // console.log(user);
        //Required Field
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Password Check
        if (!this.validateService.validatePassword(user)) {
            // console.log(user);
            // console.log(user.password);
            // console.log(user.rpassword);
            this.flashMessage.show('Please ensure your password match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Email Validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please fill in your email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register Users
        this.authService.registerUser(user).subscribe(data => {
            this.flashMessage.show('You are now register and can log in', { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/login']);
        }, error => {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/register']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.loggedIn()) {
            return true;
            //  console.log(this.authService.loggedIn);
        }
        else {
            console.log('Wrong');
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers });
    }
    authenticateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/auth', user, { headers: headers });
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        return user;
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    getProfile() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers });
    }
    loadUser() {
        const user = localStorage.getItem('user');
        this.user = user;
    }
    loggedIn() {
        return this.jwtHelper.isTokenExpired();
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PaymentService = class PaymentService {
    constructor(http) {
        this.http = http;
    }
    getPayments() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('payments/list', { headers: headers });
    }
    makePayments(payment) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('payments/make', payment, { headers: headers });
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaymentService);



/***/ }),

/***/ "./src/app/services/supplier.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/supplier.service.ts ***!
  \**********************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SupplierService = class SupplierService {
    constructor(http) {
        this.http = http;
    }
    getSuppliers() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('suppliers/list', { headers: headers });
    }
    makeSupplier(supplier) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('suppliers/add', supplier, { headers: headers });
    }
};
SupplierService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SupplierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SupplierService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() {
    }
    validateRegister(user) {
        if (user.name == "" || user.email == "" || user.username == "" || user.password == "" || user.rpassword == "") {
            return false;
        }
        else {
            return true;
        }
    }
    validatePayment(payment) {
        if (payment.supplier == "" || payment.purpose == "" || payment.amount == "") {
            return false;
        }
        else {
            return true;
        }
    }
    validateSupplier(supplier) {
        if (supplier.name == "" || supplier.category == "" || supplier.bank == "" || supplier.nuban == "") {
            return false;
        }
        else {
            return true;
        }
    }
    validatePassword(user) {
        if (user.password == user.rpassword) {
            return true;
        }
        else {
            return false;
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Korede Victor\Onedrive\Dev Workstation\supplierpay\ang-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map