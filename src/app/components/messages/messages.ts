import { Component, inject } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';

@Component({
  selector: 'app-messages',
  imports: [Notconnected],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages {
  connexions = inject(Connexions);


}
