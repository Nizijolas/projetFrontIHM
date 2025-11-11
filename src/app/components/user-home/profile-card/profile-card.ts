import { Component, inject, input, signal } from '@angular/core';
import { Editionmenu } from '../editionmenu/editionmenu';
import { Router } from '@angular/router';
import { Connexions } from '../../../services/connexions';
@Component({
  selector: 'app-profile-card',
  imports: [Editionmenu],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  router = inject(Router);
  user = input.required<string>();
  connexions = inject(Connexions);




  navigateToEdit(){
    this.router.navigateByUrl('/edit');
  }

  
}
