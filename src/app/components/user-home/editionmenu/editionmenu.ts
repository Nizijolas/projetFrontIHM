import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../../services/connexions';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Notconnected } from '../../notconnected/notconnected';
import { Success } from '../../success/success';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editionmenu',
  imports: [ReactiveFormsModule, Notconnected, Success],
  templateUrl: './editionmenu.html',
  styleUrl: './editionmenu.css',
})
export class Editionmenu {
  connexion = inject(Connexions);
  router = inject(Router);
  user = signal(this.connexion.pseudoOfLog);
  showSucess: boolean = false;

  //Pour Laura
  ageInput = new FormControl(this.connexion.age());
  niveauInput = new FormControl(this.connexion.niveau());
  lieuInput = new FormControl(this.connexion.lieu());
  bioInput = new FormControl(this.connexion.bio());


  processSaving(): void {


    if (this.user() == "Laura") {
      this.connexion.lauraAge.set(this.ageInput.value ?? this.connexion.lauraAge());
      this.connexion.lauraNiveau.set(this.niveauInput.value ?? this.connexion.lauraNiveau());
      this.connexion.lauraLieu.set(this.lieuInput.value ?? this.connexion.lauraLieu());
      this.connexion.lauraBio.set(this.bioInput.value ?? this.connexion.lauraBio());
    }
    else {
      this.connexion.paulAge.set(this.ageInput.value ?? this.connexion.paulAge());
      this.connexion.paulNiveau.set(this.niveauInput.value ?? this.connexion.paulNiveau());
      this.connexion.paulLieu.set(this.lieuInput.value ?? this.connexion.paulLieu());
      this.connexion.paulBio.set(this.bioInput.value ?? this.connexion.paulBio());
    }
    this.showSucess = true;
  }

  toggleShowSucess(): void {
    this.showSucess = false;
  }

  backToProfile():void{
    this.router.navigateByUrl('/userHome')
  }

}
