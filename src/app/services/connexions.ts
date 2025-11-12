import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Connexions {
  public paul: string[] = ["Paul", "azerty"];
  public laura: string[] = ["Laura", "azerty"];

  public someoneIsLog: boolean = false;

  public pseudoOfLog: string = "";

  //Laura Info
  lauraBio = signal<string>("Bonjour je suis sur ping pong matcher pour chercher des partenair.e.s de jeu de tous niveau même débutant car j'aime transmettre ce que je sais");
  lauraAge = signal<number>(27);
  lauraNiveau = signal<string>("expérimentée");
  lauraLieu = signal<string>("Grenoble & alentours");
  lauraSrc = signal<string>("laura.jpg");
  lauraNote = signal<number>(4.5);
  lauraNbNotes = signal<number>(23);

  //Paul Info
  paulBio = signal<string>("Salut je suis sur ping pong matcher pour trouver des gens avec qui m'amuser je débute au ping pong");
  paulAge = signal<number>(32);
  paulNiveau = signal<string>("débutant");
  paulLieu = signal<string>("Meylan");
  paulSrc = signal<string>("paul.png");
  paulNote = signal<number>(4);
  paulNbNotes = signal<number>(2);


  bio(): string {
    if (this.pseudoOfLog == "Laura")
      return this.lauraBio();
    else
      return this.paulBio();
  }

  age(): number {
    if (this.pseudoOfLog == "Laura")
      return this.lauraAge();
    else
      return this.paulAge();
  }

  niveau(): string {
    if (this.pseudoOfLog == "Laura")
      return this.lauraNiveau();
    else
      return this.paulNiveau();
  }

  lieu(): string {
    if (this.pseudoOfLog == "Laura")
      return this.lauraLieu();
    else
      return this.paulLieu();
  }

  src(): string {
    if (this.pseudoOfLog == "Laura")
      return this.lauraSrc();
    else
      return this.paulSrc();
  }

  note(): number {
    if (this.pseudoOfLog == "Laura")
      return this.lauraNote();
    else
      return this.paulNote();
  }


  nbNotes(): number {
    if (this.pseudoOfLog == "Laura")
      return this.lauraNbNotes();
    else
      return this.paulNbNotes();
  }


  //Paul Info 

}
