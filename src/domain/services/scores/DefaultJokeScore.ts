import { jokesWithScores } from "../../../index";
import { Joke } from "../../entitites/Joke";
import { JokeScore } from "../../entitites/JokeScore";
import { ScoreType } from "../../enums/ScoreType";
import { JokeMapper } from "../../mappers/JokeMapper";
import { JokeScoreService } from "./JokeScoreService";

export class DefaultJokeScore implements JokeScoreService {
    trackJoke(joke: Joke): void {
        const timeStamp = new Date().toISOString();
        const jokeScore: JokeScore = JokeMapper.mapJokeToScore(joke, timeStamp);
        jokesWithScores.push(jokeScore);
    }
    scoreJoke(score: ScoreType): void {
        const lastElement = jokesWithScores.length - 1;
        const jokeScore: JokeScore = jokesWithScores[lastElement];
        jokeScore.score = score;
    }
}
