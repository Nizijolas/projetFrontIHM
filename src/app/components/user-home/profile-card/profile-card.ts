import { Component, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Connexions } from '../../../services/connexions';
@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  router = inject(Router);
  connexions = inject(Connexions);




  navigateToEdit(){
    this.router.navigateByUrl('/edit');
  }

  
}
