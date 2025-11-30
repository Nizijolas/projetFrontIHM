import { Component, HostListener, inject, signal } from '@angular/core';
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
  showBurger = signal(false);

  processDeconnexion() {
    this.connexions.someoneIsLog = false;
    this.connexions.pseudoOfLog = "";
    this.connexions.messages = [];
    this.navigate('/');
  }

  getUrl(): string {
    return this.router.url;
  }

  toggleBurgerMenu(): void {
    this.showBurger.set(!this.showBurger())

  }

  navigate(path: string): void {
    this.showBurger.set(false);
    this.router.navigateByUrl(path);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log("heeyyayra");
    this.showBurger.set(false);
  }




}
