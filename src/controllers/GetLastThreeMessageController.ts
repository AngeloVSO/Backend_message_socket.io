import { Request, Response } from "express";
import { GetLastThreeMessageService } from "../services/GetLastThreeMessageService";

class GetLastThreeMessageController {
  async handle(request: Request, response: Response) {
    const service = new GetLastThreeMessageService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLastThreeMessageController };
