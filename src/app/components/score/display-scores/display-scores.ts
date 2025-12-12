import { Component, HostListener, input, output } from '@angular/core';
import { Partie } from '../../../model/partie';
@Component({
  selector: 'app-display-scores',
  imports: [],
  templateUrl: './display-scores.html',
  styleUrl: './display-scores.css',
})
export class DisplayScores {
  close = output<void>();
  parties = input.required<Partie[]>();
  name = input.required<string>();
  closer = input.required<boolean>();

  

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      //27  == Escape key code
      this.close.emit();
    }
  }
}
