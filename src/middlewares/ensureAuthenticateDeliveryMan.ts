import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateDeliveryMan (request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({
            success: false,
            message: "Missing Token"
        })
    }

    const token = authHeader.split(" ")[1]

    try {
        const { sub } = verify(token, 'secret_deliveryman')

        request.id_deliveryman = sub as string

        return next()
    } catch (err) {
        return response.status(401).json({
            success: false,
            message: "Invalid Token"
        })
    }
}