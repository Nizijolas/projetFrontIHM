export class SetPing {

    myPoints:number;
    advPoints:number;

    constructor(myPoints:number, advPoints:number){
        this.myPoints = myPoints;
        this.advPoints = advPoints;
    }

    won():boolean{
        //pas d'égalité (règle des deux points d'écarts);
        return this.myPoints > this.advPoints;
    }
}
