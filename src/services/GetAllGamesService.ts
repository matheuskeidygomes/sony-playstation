import {games} from '../data/fakeDatabase';

export class GetAllGamesServices {
    async execute() {
        return games;
    }
}