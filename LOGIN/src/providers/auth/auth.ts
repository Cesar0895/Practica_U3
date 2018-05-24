import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
    providerGoogle: firebase.auth.GoogleAuthProvider;
    providerFacebook: firebase.auth.FacebookAuthProvider;
    providerTwitter: firebase.auth.TwitterAuthProvider;
    providerCorreo: firebase.auth.EmailAuthProvider;

    constructor(private afAuth: AngularFireAuth) {
        console.log('Hello');
    }
    usuario() {
        return this.afAuth.auth.currentUser;
    }

    registerUser(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this.afAuth.auth.signInWithEmailAndPassword(email, password)
            })
            .then(user => Promise.resolve(user))
            .catch(err => Promise.reject(err));
    }

    loginUser(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(user => Promise.resolve(user))
            .catch(err => Promise.reject(err));
    }


    loginUserWithGoolePlus() {
        this.providerGoogle = new firebase.auth.GoogleAuthProvider();
        this.providerGoogle.addScope("https://www.googleapis.com/auth/userinfo.email");
        return firebase.auth().signInWithRedirect(this.providerGoogle)
            .then(user => Promise.resolve(user))
            .catch(err => Promise.reject(err));
    }
    loginUserWithTwitter() {
        this.providerTwitter = new firebase.auth.TwitterAuthProvider;
        this.providerTwitter.setCustomParameters({
            'lang': 'es',
            'email': 'true'
        });
        return firebase.auth().signInWithRedirect(this.providerTwitter)
            .then(user => Promise.resolve(user))
            .catch(err => Promise.reject(err));
    }
    loginUserWithFacebook() {
        this.providerFacebook = new firebase.auth.FacebookAuthProvider;
        this.providerFacebook.addScope("email");
        return firebase.auth().signInWithRedirect(this.providerFacebook)
            .then(user => Promise.resolve(user))
            .catch(err => Promise.reject(err));
    }
    logout() {
        this.afAuth.auth.signOut().then(() => {
        })
    }

    get Session() {
        return this.afAuth.authState;
    }

    updateEmail(email: any) {
        return this.afAuth.auth.currentUser.updateEmail(email);
    }

    verificarEmail() {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    }
    cambiarContraseña(pass: any) {
        return this.afAuth.auth.currentUser.updatePassword(pass);
    }

    resetPassword(correo: any) {
        return this.afAuth.auth.sendPasswordResetEmail(correo);
    }

    asociarCuentas(provedor: any, email = "", password = "") {
        var provider;
        if (provedor == "google") provider = new firebase.auth.GoogleAuthProvider();
        if (provedor == "facebook") provider = new firebase.auth.FacebookAuthProvider();
        if (provedor == "twitter") provider = new firebase.auth.TwitterAuthProvider();
        if (provedor == "correo") {
            return this.afAuth.auth.currentUser.linkWithCredential(firebase.auth.EmailAuthProvider.credential(email, password));
        }
        return this.afAuth.auth.currentUser.linkWithRedirect(provider);
    }

    obtenerDatos() {
        return this.afAuth.auth.getRedirectResult();
    }

    desAsociar(provedorID: any) {
        return this.usuario().unlink(provedorID);
    }
}
