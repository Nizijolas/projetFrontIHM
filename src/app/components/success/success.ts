import { Component, output } from '@angular/core';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {
  close = output<void>();
  sendCloseMessage(): void {
    this.close.emit();
  }
}
