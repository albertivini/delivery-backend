import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";

export class AuthenticateClientController {
    async handle(request:Request, response: Response): Promise<Response> {
        try {
            const { username, password} = request.body

            const authenticateClientUseCase = new AuthenticateClientUseCase()
    
            const result = await authenticateClientUseCase.execute({ username, password})
    
            return response.json(result)
        } catch (error: any) {
            return response.status(401).json({
                success: false,
                message: error.message,
            })
        }
        

    }
}