import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Connexions {
  public paul:string[] = ["Paul", "azerty"];
  public laura:string[] = ["Laura", "azerty"];
  public someoneIsLog:boolean = false;
  public pseudoOfLog:string = "";
}
