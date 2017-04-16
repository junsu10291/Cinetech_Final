export class Movie {
    title: string;
    image?: string;
    cast?: string;

    constructor(title: string, image?: string, cast?: string) {
        this.title = title;
        this.image = image;
        this.cast = cast;
    }
}