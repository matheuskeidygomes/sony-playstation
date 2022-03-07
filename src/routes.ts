import { Router } from "express";
import { GetAllGamesController } from "./controllers/GetAllGamesController";

const router = Router();

router.get("/games", new GetAllGamesController().handle);

export {router}