
import { Cast } from "../actors/cast.model";

export class Movie {
    constructor(
        public id: string,
        public title?: string, 
        public genres?: [string], 
        public backdrop_path?: string,
        public poster_path?: string,
        public trailer_path?: string,
        public runtime?: Number,
        public vote_count?: Number,
        public vote_average?: Number,
        public country?: string,
        public overview?: string,
        public cast?: Cast[]) {}
}