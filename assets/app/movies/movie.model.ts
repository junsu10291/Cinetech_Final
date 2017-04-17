export class Movie {
    title: string;
    imagePath?: string;
    carouselPath?: string;
    trailerPath?: string;
    country?: string;
    genre?: string;
    director?: string;
    numRated?: string;
    averageRatings?: number;
    synopsis?: string;

    constructor(title: string, imagePath?: string, carouselPath?: string, trailerPath? : string, 
    country?: string, genre?: string, director?: string, numRated?: string, averageRatings?: number, synopsis?: string) {
        this.title = title;
        this.imagePath = imagePath;
        this.carouselPath = carouselPath;
        this.trailerPath = trailerPath;
        this.country = country;
        this.genre = genre;
        this.director = director;
        this.numRated = numRated,
        this.averageRatings = averageRatings;
        this.synopsis = synopsis;
    }
}


