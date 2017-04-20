import { Actor } from "../actors/actor.model";

export class Movie {

    constructor(
        private title: string, 
        private genres?: [string], 
        private backdropPath?: string,
        private posterPath?: string,
        private trailerPath?: string,
        private popularity?: Number,
        private voteCount?: Number,
        private voteAverage?: Number,
        private country?: string,
        private overview?: string,
        private cast?: [Actor]) {}
}