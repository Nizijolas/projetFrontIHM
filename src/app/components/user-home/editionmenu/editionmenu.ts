import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../../services/connexions';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Notconnected } from '../../notconnected/notconnected';

@Component({
  selector: 'app-editionmenu',
  imports: [ReactiveFormsModule, Notconnected],
  templateUrl: './editionmenu.html',
  styleUrl: './editionmenu.css',
})
export class Editionmenu {
  connexion = inject(Connexions);
  user = signal(this.connexion.pseudoOfLog);

  //Pour Laura
  lauraAgeInput = new FormControl(this.connexion.lauraAge());
  lauraNiveauInput = new FormControl(this.connexion.lauraNiveau());
  lauraLieuInput = new FormControl(this.connexion.lauraLieu());
  lauraBioInput = new FormControl(this.connexion.lauraBio());


  processSaving():void{

    if ( this.user()== "Laura"){
      this.connexion.lauraAge.set(this.lauraAgeInput.value ?? this.connexion.lauraAge());
      this.connexion.lauraNiveau.set(this.lauraNiveauInput.value ?? this.connexion.lauraNiveau());
      this.connexion.lauraLieu.set(this.lauraLieuInput.value ?? this.connexion.lauraLieu());
      this.connexion.lauraBio.set(this.lauraBioInput.value ?? this.connexion.lauraBio());



    }
  }
  
}
