import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Connexions {
  public paul:any[] = ["Paul", "azerty"];
  public someoneIsLog:boolean = false;
  public pseudoOfLog:string = "";
}
