export class Actor{
    name: string;
    profilePath?: string;
    gender: string;

    constructor(name: string, profilePath?: string, gender?: string) {
        this.name = name;
        this.profilePath = profilePath;      
        this.gender = gender; 
    }
}



