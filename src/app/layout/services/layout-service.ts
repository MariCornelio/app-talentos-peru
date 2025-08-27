import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  private overlayMenuActiveSubject = new BehaviorSubject<boolean>(false);

  get sidebarVisibleAction$(): Observable<boolean> {
    return this.sidebarVisibleSubject.asObservable();
  }
  get overlayMenuActiveAction$(): Observable<boolean> {
    return this.overlayMenuActiveSubject.asObservable();
  }

  constructor(private router: Router) {}

  onMenuToggle(): void {
    if (this.isDesktop()) {
      const current = this.sidebarVisibleSubject.value;
      this.sidebarVisibleSubject.next(!current);
    } else {
      const current = this.overlayMenuActiveSubject.value;
      this.overlayMenuActiveSubject.next(!current);
    }
  }

  onClickLayoutForMobile(): void {
    this.overlayMenuActiveSubject.next(false);
  }

  isDesktop(): boolean {
    return window.innerWidth > 1023;
  }
}
