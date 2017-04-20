import { MoviesCast } from "./moviesCast.model";

export class Actor {
    constructor(
        private name: string, 
        private profilePath?: string,
        private moviesCast?: [MoviesCast]) {}
}