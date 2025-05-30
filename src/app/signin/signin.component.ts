import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUserCredentials } from '../../models/User';
import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
   standalone: true, 
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent,FormsModule], 
  styleUrl: './signin.component.css'
})


export class SigninComponent {

  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true)
    });
  }

}

