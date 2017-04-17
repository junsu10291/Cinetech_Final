export class Movie {
    title: string;
    imagePath?: string;

    constructor(title: string, imagePath?: string) {
        this.title = title;
        this.imagePath = imagePath;
    }
}