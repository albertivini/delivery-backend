import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./createDeliveryManUseCase";

export class CreateDeliveryManController {
    
    async handle(request: Request, response: Response): Promise<Response> {

        const { username, password } = request.body

        const createDeliveryManUseCase = new CreateDeliveryManUseCase()

        const result = await createDeliveryManUseCase.execute({ username, password})

        return response.json(result)
    }
}