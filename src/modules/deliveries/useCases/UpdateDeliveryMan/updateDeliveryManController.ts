import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./updateDeliveryManUseCase";

export class UpdateDeliveryManController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_delivery } = request.params
            
            const { id_deliveryman } = request

            const updateDeliveryManUseCase = new UpdateDeliveryManUseCase()

            const result = await updateDeliveryManUseCase.execute({id_delivery, id_deliveryman})
    
            return response.json(result)
        } catch (err: any) {
            return response.json({
                success: false,
                message: err.message
            })
        }
    }
}