import { HazDadJokeDTOResponse } from '../dtos/HazDadJokeDTOResponse';
export declare class HazDadDataSource {
    private readonly BASE_URL;
    getJoke(): Promise<HazDadJokeDTOResponse>;
}
