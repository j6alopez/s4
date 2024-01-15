import { ChuckJokeDTOResponse } from '../dtos/ChuckJokeDTOResponse';
export declare class ChuckNorrisDataSource {
    private readonly BASE_ULR;
    getJoke(): Promise<ChuckJokeDTOResponse>;
}
