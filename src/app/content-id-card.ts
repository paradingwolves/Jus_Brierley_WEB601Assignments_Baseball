import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentIdGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = Number(route.paramMap.get('id'));
    const validIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your own valid IDs

    if (isNaN(id) || !validIds.includes(id)) {
      this.router.navigateByUrl('/page-not-found');
      return false;
    }

    return true;
  }
}
