import { Request, Response } from "express";
import { stringify } from "uuid";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let usersList;

    try {
      usersList = this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).json(usersList);
  }
}

export { ListAllUsersController };
