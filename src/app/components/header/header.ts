import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Router, RouterLink } from "@angular/router";
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public connexions = inject(Connexions);
  public router = inject(Router);
  showBurger: boolean = false;

  processDeconnexion() {
    this.connexions.someoneIsLog = false;
    this.connexions.pseudoOfLog = "";
    this.router.navigateByUrl('/');
  }

  getUrl(): string {
    return this.router.url;
  }

  toggleBurgerMenu(): void {
    this.showBurger = !this.showBurger;
  }

}
