import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Connexions {
  public paul:string[] = ["Paul", "azerty"];
  public laura:string[] = ["Laura", "azerty"];
  public someoneIsLog:boolean = false;
  public pseudoOfLog:string = "";


  lauraBio = signal<string>("Bonjour je suis sur ping pong matcher pour chercher des partenair.e.s de jeu de tous niveau même débutant car j'aime transmettre ce que je sais");
  lauraAge = signal<number>(27);
  lauraNiveau = signal<string>("expérimentée");
  lauraLieu = signal<string>("Grenoble & alentours");
  lauraSrc = signal<string>("laura.jpg");
  lauraNote = signal<number>(4.5);
  lauraNbNotes = signal<number>(23);

}
