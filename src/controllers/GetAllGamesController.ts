import { Request, Response } from "express";
import { GetAllGamesServices } from "../services/GetAllGamesService"

export class GetAllGamesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllGamesServices();

        const games = await service.execute();

        return response.json(games);
    }
}