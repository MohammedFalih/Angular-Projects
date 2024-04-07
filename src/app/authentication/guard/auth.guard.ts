import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router)

  if (authService.isLoggedIn()) {
    if (route.url.length > 0) {
      let menu = route.url[0].path;
      if (menu == 'user') {
        if (authService.GetUserRole() == 'Admin') {
          return true
        } else {
          toastr.warning("You don't have access");
          router.navigate(['auth', 'login']);
          return false
        }
      } else {
        return true;
      }
    }
    return true;
  } else {
    // const router = inject(Router);
    return router.createUrlTree(['/auth/login']);
  }
};
