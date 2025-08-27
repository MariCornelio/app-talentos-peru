import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { LayoutService } from '../services/layout-service';
import { Subject } from 'rxjs';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [Avatar, CommonModule, PopoverModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  countries: any[] | undefined;
  country: string = 'Español';
  code: string = 'Es';

  @ViewChild('op') op!: Popover;
  constructor(private layoutSvc: LayoutService) {}

  ngOnInit() {
    this.countries = [
      { name: 'Español', code: 'ES' },
      { name: 'English', code: 'US' },
    ];
  }
  onMenuToggle() {
    this.layoutSvc.onMenuToggle();
  }

  toggle(event: any) {
    this.op.toggle(event);
  }

  selectCountry(country: any) {
    this.country = country.name;
    this.code = country.code;
    this.op.hide();
  }
}
