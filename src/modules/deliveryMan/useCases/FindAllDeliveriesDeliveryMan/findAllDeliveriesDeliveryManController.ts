import { Request, Response } from "express";
import { FindAllDeliveriesDeliveryManUseCase } from "./findAllDeliveriesDeliveryManUseCase";

export class FindAllDeliveriesDeliveryManController {
    
    async handle(request: Request, response: Response): Promise<Response> {

        const { id_deliveryman } = request

        const findAllDeliveriesDeliveryManUseCase = new FindAllDeliveriesDeliveryManUseCase()

        const result = await findAllDeliveriesDeliveryManUseCase.execute(id_deliveryman)

        return response.json(result)
    }
}