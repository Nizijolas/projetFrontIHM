import { Component, output } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
close = output<void>();

sendCloseMessage():void{
  this.close.emit();
}
}
