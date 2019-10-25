import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public angularFireAuth: AngularFireAuth) {
  }

  get isLoggedIn(): boolean {
    let authStatus = false;
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      authStatus = !!user;
    });
    console.log(authStatus);
    return authStatus;
  }
}
