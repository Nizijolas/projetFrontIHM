import { Component, inject, input, output, signal } from '@angular/core';
import { Connexions } from '../../../services/connexions';
@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  connexions = inject(Connexions);
  showParties = output<void>();





  
}
