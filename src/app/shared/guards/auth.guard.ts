import { AuthService } from './../services/auth.service';
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('AuthGuard canActivate', state.url);
      console.log(next.params);

      if (this.authService.isAuthenticated()) {
        return true;
      }

      this.router.navigateByUrl('/auth/login');

      return false;

      // return true; // user can go to the page through routing

      // return false; // user can not to the page through routing

  }
}
