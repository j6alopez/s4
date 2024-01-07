import { ScoreType } from '../enums/ScoreType';
export declare class JokeScore {
    joke: string;
    date: string;
    score: ScoreType;
    constructor(joke: string, date: string, score: ScoreType);
}
