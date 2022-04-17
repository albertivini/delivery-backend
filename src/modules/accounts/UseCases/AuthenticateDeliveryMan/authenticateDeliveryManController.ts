import { Request, Response } from "express";
import { AuthenticateDeliveryManUseCase } from "./authenticateDeliveryManUseCase";

export class AuthenticateDeliveryManController {
    async handle(request:Request, response: Response): Promise<Response> {
        try {
            const { username, password} = request.body

            const authenticateDeliveryManUseCase = new AuthenticateDeliveryManUseCase()
    
            const result = await authenticateDeliveryManUseCase.execute({ username, password})
    
            return response.json(result)
        } catch (error: any) {
            return response.status(401).json({
                success: false,
                message: error.message,
            })
        }
        

    }
}