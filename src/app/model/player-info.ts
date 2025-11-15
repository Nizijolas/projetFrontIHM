export class PlayerInfo {
    public name: string;
    public src: string;
    public bio: string;
    public niveau: string;
    public lieu: string;
    public age: number;
    public note: number;
    public nbNotes: number;

    public static undefined: PlayerInfo = new PlayerInfo(
        "undefined", "undefined", "undefined", "undefined", "undefined", 0, 0, 0);

    constructor(
        name: string,
        src: string,
        bio: string,
        niveau: string,
        lieu: string,
        age: number,
        note: number,
        nbNotes: number
    ) {
        this.name = name;
        this.src = src;
        this.bio = bio;
        this.niveau = niveau;
        this.lieu = lieu;
        this.age = age;
        this.note = note;
        this.nbNotes = nbNotes;
    }
}
