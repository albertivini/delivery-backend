import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IAuthenticateDeliveryMan } from "./IAuthenticateDeliveryMan";

export class AuthenticateDeliveryManUseCase {
    async execute({username, password}: IAuthenticateDeliveryMan) {

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if (!deliveryman) {
            throw new Error("User does not exists")
        }

        const passwordMatch = await compare(password, deliveryman.password)

        if (!passwordMatch) {
            throw new Error("Incorrect Password")
        }

        const token = sign({ username }, 'secret_deliveryman', {
            subject: deliveryman.id,
            expiresIn: '1h'
        })

        return token

    }
}