import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { TokenService } from './../../services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuthenticate$!: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.isAuthenticate$ = this.tokenService.isAuthentication;
  }

  logout() {
    this.authService.logout().subscribe({
      next() {},
    });
  }
}
