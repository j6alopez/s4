import { ChuckJokeDTO } from '../dtos/ChuckJokeDTO';
export declare class ChuckNorrisDataSource {
    private readonly BASE_ULR;
    getJoke(): Promise<ChuckJokeDTO>;
}
