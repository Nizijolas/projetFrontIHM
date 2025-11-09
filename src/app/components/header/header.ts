import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { RouterLink } from "@angular/router";
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public connexions = inject(Connexions);
  showInfo = signal("notToShow");
  alert():void{
    window.alert("hey");
  }

  showMessage():void{
    this.showInfo.set("toShow");
  }

  closeMessage():void{
    this.showInfo.set("notToShow");
  }

}
