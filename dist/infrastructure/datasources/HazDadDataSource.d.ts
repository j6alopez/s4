import { HazDadJokeDTO } from '../dtos/HazDadJokeDTO';
export declare class HazDadDataSource {
    private readonly BASE_URL;
    getJoke(): Promise<HazDadJokeDTO>;
}
