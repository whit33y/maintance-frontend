import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();
  const guestOnly = route.data?.['guestOnly'] === true;

  if (guestOnly) {
    if (isLoggedIn) {
      return router.parseUrl('/maintenance');
    }
    return true;
  }

  if (!isLoggedIn) {
    return router.parseUrl('/authentication');
  }

  return true;
};
