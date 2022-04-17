import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {item_name} = request.body

            const { id_client } = request

            const createDeliveryUseCase = new CreateDeliveryUseCase()
    
            const result = await createDeliveryUseCase.execute({ id_client, item_name})
    
            return response.json(result)
        } catch (err: any) {
            return response.json({
                success: false,
                message: err.message
            })
        }
    }
}