webpackJsonp([1],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.user = { email: '', password: '' };
    }
    LoginPage.prototype.signin = function () {
        var _this = this;
        var datos = { email: "", password: "" };
        var prompt = this.alertCtrl.create({
            title: 'Registrar Usuario',
            message: "",
            inputs: [
                {
                    name: 'Usuario',
                    placeholder: 'Usuario',
                    type: "email"
                },
                {
                    name: 'Password',
                    placeholder: 'Contraseña',
                    type: "password"
                },
                {
                    name: 'ConfirmPassword',
                    placeholder: 'Confirmar Contraseña',
                    type: "password"
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Crear',
                    handler: function (data) {
                        if (data.Usuario != '' && data.Password != '' && data.ConfirmPassword != '') {
                            if (data.Password == data.ConfirmPassword) {
                                _this.auth.registerUser(data.Usuario, data.Password)
                                    .then(function (user) {
                                    // El usuario se ha creado correctamente
                                })
                                    .catch(function (err) {
                                    _this.alertCtrl.create({
                                        title: 'Error',
                                        subTitle: err.message,
                                        buttons: ['Aceptar']
                                    }).present();
                                });
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: 'ERROR!',
                                    subTitle: 'Las contraseñas no coinciden, intentelo nuevamente!',
                                    buttons: ['Aceptar']
                                }).present();
                            }
                        }
                        else {
                            _this.alertCtrl.create({
                                title: 'Algo salio mal :`(  ',
                                subTitle: '¡¡Intentelo Nuevamente!!',
                                buttons: ['Aceptar']
                            }).present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.showMenu = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "Iniciar Sesión con:",
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Github",
                    role: 'destructive',
                    icon: 'logo-github',
                    handler: function () {
                        console.log("Github");
                        _this.auth.loginUserWithGitHub()
                            .then(function (result) {
                            console.log("Devuelto por Github" +
                                result);
                            var token = result.credential.accessToken;
                            var user = result.user;
                        })
                            .catch(function (error) {
                            console.log(error.message);
                        });
                    }
                },
                {
                    text: "Twitter",
                    role: 'destructive',
                    icon: 'logo-twitter',
                    handler: function () {
                        console.log("Twitter");
                        _this.auth.loginUserWithTwitter()
                            .then(function (result) {
                            console.log("Devuelto por Twitter" +
                                result);
                            var token = result.credential.accessToken;
                            var user = result.user;
                        })
                            .catch(function (error) {
                            console.log(error.message);
                        });
                    }
                },
                {
                    text: "Google",
                    role: 'destructive',
                    icon: 'logo-google',
                    handler: function () {
                        console.log("Google");
                        _this.auth.loginUserWithGoolePlus()
                            .then(function (result) {
                            console.log("Devuelto por Google" +
                                result);
                            var token = result.credential.accessToken;
                            var user = result.user;
                        })
                            .catch(function (error) {
                            console.log(error.message);
                        });
                    }
                },
                {
                    text: "Facebook",
                    role: 'destructive',
                    icon: 'logo-facebook',
                    handler: function () {
                        console.log("Facebook");
                        _this.auth.loginUserWithFacebook()
                            .then(function (result) {
                            console.log("Devuelto por Facebook" +
                                result);
                            var token = result.credential.accessToken;
                            var user = result.user;
                        })
                            .catch(function (error) {
                            console.log(error.message);
                        });
                    }
                }
            ]
        }).present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password)
            .then(function (user) { })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.logingoogle = function () {
        var a = this.auth;
        this.auth.loginUserWithGoolePlus().then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    };
    LoginPage.prototype.loginfacebook = function () {
        this.auth.loginUserWithFacebook().then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    };
    LoginPage.prototype.logingithub = function () {
        this.auth.loginUserWithGitHub().then(function (result) {
            if (result.credential) {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = result.credential.accessToken;
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
    };
    LoginPage.prototype.logintwitter = function () {
        this.auth.loginUserWithTwitter().then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\login\login.html"*/'<ion-content>\n    <ion-card full>\n        <ion-item>\n            <h1 Style= "text-align: center"><b>Login Social Networks</b></h1>\n        </ion-item>\n        <img src="http://editions.lib.umn.edu/electionacademy/wp-content/uploads/sites/3/2013/01/social.media_.cube_.jpg" \n      (click)="showMenu()"\n      >\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n          Login with:\n      </ion-card-header>\n      <ion-card-content>\n        \n        <button ion-button (click)="showMenu()" type="submit" color="dark" round full>\n            <ion-icon name="people"> </ion-icon>  Redes Sociales\n        </button>\n        <!--<button ion-button (click)="loginfacebook()" type="submit" color="primary" round full>\n            <ion-icon name="logo-facebook"> </ion-icon>  Facebook\n        </button>\n        <button ion-button (click)="logintwitter()" type="submit" color="primary" round full>\n            <ion-icon name="logo-twitter"> </ion-icon>  Twitter\n        </button>\n        <button ion-button (click)="logingoogle()" type="submit" color="danger" round full>\n            <ion-icon name="logo-google"></ion-icon> Google\n        </button>-->\n        <button ion-button (click)="signin()" type="submit" color="secondary" round full>\n            <ion-icon name="person-add"></ion-icon> Registrarse\n        </button>\n        \n      </ion-card-content>\n    </ion-card>\n </ion-content>\n '/*ion-inline-end:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		451,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, auth, modalCtrl, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.dato = this.auth.usuario();
    }
    HomePage.prototype.imgLogo = function (pro) {
        if (pro == "google.com") {
            return "logo-google";
        }
        if (pro == "facebook.com") {
            return "logo-facebook";
        }
        if (pro == "twitter.com") {
            return "logo-twitter";
        }
        if (pro == "github.com") {
            return "logo-github";
        }
        return "mail";
    };
    HomePage.prototype.ionViewCanEnter = function () {
        this.auth.obtenerResultados().then(function (result) {
            if (result.credential) {
                // Accounts successfully linked.
                console.log('hola0');
                var credential = result.credential;
                var user = result.user;
            }
        }).catch(function (error) {
            // Handle Errors here.
            // ...
        });
        return true;
    };
    HomePage.prototype.mensage = function (men) {
        this.alertCtrl.create({
            title: 'Error',
            subTitle: men + '',
            buttons: ['Aceptar']
        }).present();
    };
    HomePage.prototype.socialNetwork = function () {
        var _this = this;
        var clase = this;
        this.actionSheetCtrl.create({
            title: 'Sign In with Social Network',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Google',
                    role: 'destructive',
                    icon: 'logo-google',
                    handler: function () {
                        var a = _this.auth;
                        _this.auth.ligarCuentas('google').then(function (result) {
                            // Accounts successfully linked.
                            var credential = result.credential;
                            var user = result.user;
                            // ...
                        }).catch(function (error) {
                            clase.mensage('La cuenta ya se vinculo con este provedor');
                        });
                    }
                },
                {
                    text: 'Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        _this.auth.ligarCuentas('facebook').then(function (result) {
                            // Accounts successfully linked.
                            var credential = result.credential;
                            var user = result.user;
                            // ...
                        }).catch(function (error) {
                            clase.mensage('La cuenta ya se vinculo con este provedor');
                        });
                    }
                },
                {
                    text: 'GitHub',
                    icon: 'logo-github',
                    handler: function () {
                        _this.auth.ligarCuentas('github').then(function (result) {
                            // Accounts successfully linked.
                            console.log('hola1');
                            var credential = result.credential;
                            var user = result.user;
                            // ...
                            console.log('user1', result.user);
                        }).catch(function (error) {
                            clase.mensage('La cuenta ya se vinculo con este provedor');
                        });
                    }
                },
                {
                    text: 'Twiter',
                    icon: 'logo-twitter',
                    handler: function () {
                        _this.auth.ligarCuentas('twitter').then(function (result) {
                            // Accounts successfully linked.
                            var credential = result.credential;
                            var user = result.user;
                            // ...
                        }).catch(function (error) {
                            clase.mensage('La cuenta ya se vinculo con este provedor');
                        });
                    }
                },
                {
                    text: 'Correo',
                    icon: 'logo-email',
                    handler: function () {
                        var datos = { email: "", password: "" };
                        var prompt = _this.alertCtrl.create({
                            title: 'Login',
                            message: "Enter a name for this new album you're so keen on adding",
                            inputs: [
                                {
                                    name: 'Usuario',
                                    placeholder: 'Usuario',
                                    type: "email"
                                },
                                {
                                    name: 'Password',
                                    placeholder: 'Password',
                                    type: "password"
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Login',
                                    handler: function (data) {
                                        if (data.Usuario != "" && data.Password != "") {
                                            _this.auth.ligarCuentas('correo', data.Usuario, data.Password).then(function (result) {
                                                var credential = result.credential;
                                                var user = result.user;
                                            }).catch(function (error) {
                                                clase.mensage('Verifica los datos Introducidos');
                                            });
                                        }
                                        else {
                                            clase.mensage('Completa los Campos');
                                        }
                                    }
                                }
                            ]
                        });
                        prompt.present();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        }).present();
    };
    HomePage.prototype.desvincular = function (provedorID) {
        this.auth.desAsociar(provedorID).then(function () {
            this.mensage(provedorID + " Desvinculado");
        }).catch(function (error) {
            // An error happened
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar #mycontent>\n      <button ion-button menuToggle>\n          <ion-icon name="menu" item-start></ion-icon>\n      </button>\n    <ion-title>\n      Datos del usuario\n    </ion-title>\n  </ion-navbar>\n </ion-header>\n \n \n <ion-content padding>\n \n  <ion-list>\n    <ion-item-sliding *ngFor="let provedor of dato.providerData">\n      <ion-item>\n        <ion-card>\n            <ion-item>\n                <ion-avatar item-start *ngIf=\'(provedor.photoURL==null)?false:true\'>\n                  <img src="{{provedor.photoURL}}">\n                </ion-avatar>\n                <ion-avatar item-start *ngIf=\'(provedor.photoURL==null)?true:false\'>\n                  </ion-avatar>\n                <ion-icon name="{{imgLogo(provedor.providerId)}}" item-end></ion-icon>\n                <h1>{{(provedor.providerId=="password")?"Email":provedor.providerId}}</h1>\n            </ion-item>\n            <ion-card-header>\n            </ion-card-header>\n            <ion-card-content>\n                <h2><b>\n                    <ion-icon name=\'person\'></ion-icon>\n                Usuario: </b></h2><p>{{provedor.displayName}}</p>\n                <h2><b><ion-icon name=\'mail\'></ion-icon> \n                  Correo:</b></h2> <p>{{provedor.email}}</p>\n               \n                <ion-list>\n                  <ion-item>\n                    \n                  </ion-item>\n                </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n        <ion-item-options side="right">\n            <button ion-button color="secondary" icon-only (click)="desvincular(provedor.providerId)"><ion-icon name="trash"></ion-icon></button>\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <button side="center" ion-button (click)=\'auth.logout()\' color=\'secondary\'><ion-icon name="power" round full></ion-icon>Cerrar sesion</button>\n </ion-content>\n '/*ion-inline-end:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Offline = (function () {
    function Offline(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    Offline = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offline',template:/*ion-inline-start:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\offline\offline.html"*/'<ion-content padding>\n    <ion-card-header>\n    <div> No tienes conexion! Asegurate de tenerla e intentalo de nuevo</div>\n    </ion-card-header>\n    </ion-content>'/*ion-inline-end:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\pages\offline\offline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], Offline);
    return Offline;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_offline_offline__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environment_environment__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_offline_offline__["a" /* Offline */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_offline_offline__["a" /* Offline */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_offline_offline__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_offline_offline__["a" /* Offline */];
        platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Andres\Desktop\SocialNetworksLogin\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBOn7s6e7IWYovae9pfUE-GjW5EEms03PE",
        authDomain: "dam2018u3p01-45ef8.firebaseapp.com",
        databaseURL: "https://dam2018u3p01-45ef8.firebaseio.com",
        projectId: "dam2018u3p01-45ef8",
        storageBucket: "dam2018u3p01-45ef8.appspot.com",
        messagingSenderId: "388021611619"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.usuario = function () {
        return this.afAuth.auth.currentUser;
    };
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password);
        })
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUserWithGoolePlus = function () {
        this.providerGoogle = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        this.providerGoogle.addScope("https://www.googleapis.com/auth/userinfo.email");
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(this.providerGoogle)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUserWithTwitter = function () {
        this.providerTwitter = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider;
        this.providerTwitter.setCustomParameters({
            'lang': 'es',
            'email': 'true'
        });
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(this.providerTwitter)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUserWithGitHub = function () {
        this.providerGithub = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider;
        this.providerGithub.addScope("user:email");
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(this.providerGithub);
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().getRedirectResult()
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUserWithFacebook = function () {
        this.providerFacebook = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider;
        this.providerFacebook.addScope("email");
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(this.providerFacebook)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Logout de usuario
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
            // hemos salido
        });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.updateEmail = function (email) {
        return this.afAuth.auth.currentUser.updateEmail(email);
    };
    AuthProvider.prototype.verificarEmail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    };
    AuthProvider.prototype.cambiarContraseña = function (pass) {
        return this.afAuth.auth.currentUser.updatePassword(pass);
    };
    AuthProvider.prototype.resetPassword = function (correo) {
        return this.afAuth.auth.sendPasswordResetEmail(correo);
    };
    AuthProvider.prototype.ligarCuentas = function (provedor, email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        var provider;
        if (provedor == "google")
            provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        if (provedor == "facebook")
            provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        if (provedor == "twitter")
            provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        if (provedor == "github")
            provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        if (provedor == "correo") {
            return this.afAuth.auth.currentUser.linkWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].EmailAuthProvider.credential(email, password));
        }
        return this.afAuth.auth.currentUser.linkWithRedirect(provider);
    };
    AuthProvider.prototype.obtenerResultados = function () {
        return this.afAuth.auth.getRedirectResult();
    };
    AuthProvider.prototype.desAsociar = function (provedorID) {
        return this.usuario().unlink(provedorID);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map