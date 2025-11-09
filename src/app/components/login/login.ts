import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Connexions } from '../../services/connexions';
import { Router } from '@angular/router';
import { Error } from "../error/error";
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Error],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginControl = new FormControl('');
  mdpControl = new FormControl('');
  private connexions = inject(Connexions);
  private router = inject(Router);
  showError: boolean = false;

  processConnexion(): void {
    if (this.loginControl.value == this.connexions.paul[0]
      && this.mdpControl.value == this.connexions.paul[1]) {
      this.connexions.pseudoOfLog = "Paul";
      this.connexions.someoneIsLog = true;
      this.router.navigateByUrl('/userHome');

    }
    else
      this.showError = true;
  }

  closeError(): void {
    this.showError = false;
  }

  register(): void{
    alert("On ne peut pas s'enregister car pas de BDD dans cette version");
  }

}
