import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);

    return router.createUrlTree(['/auth/login']);
  }
};
