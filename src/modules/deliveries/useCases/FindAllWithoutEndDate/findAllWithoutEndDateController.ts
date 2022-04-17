import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";

export class FindAllWithoutEndDateController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase()

            const result = await findAllWithoutEndDateUseCase.execute()
    
            return response.json(result)
        } catch (err: any) {
            return response.json({
                success: false,
                message: err.message
            })
        }
    }
}