import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./updateEndDateUseCase";

export class UpdateEndDateController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_delivery } = request.params
            
            const { id_deliveryman } = request

            const updateEndDateUseCase = new UpdateEndDateUseCase()

            const result = await updateEndDateUseCase.execute({id_delivery, id_deliveryman})
    
            return response.json(result)
        } catch (err: any) {
            return response.json({
                success: false,
                message: err.message
            })
        }
    }
}