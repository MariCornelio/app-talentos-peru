import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}
  // TODO:Agregar logica en la funcion Login
  ngOnInit(): void {
    const role: string = 'applicant';
    switch (role) {
      case 'applicant':
        this.router.navigate(['/aplicante']);
        break;
      case 'company':
        this.router.navigate(['/empresa']);
        break;
    }
  }
}
