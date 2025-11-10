import { Component, output } from '@angular/core';

@Component({
  selector: 'app-editionmenu',
  imports: [],
  templateUrl: './editionmenu.html',
  styleUrl: './editionmenu.css',
})
export class Editionmenu {
  close = output<void>();

  sendCloseMessage(){
    this.close.emit();
  }
}
