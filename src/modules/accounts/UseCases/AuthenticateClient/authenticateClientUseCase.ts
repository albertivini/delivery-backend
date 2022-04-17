import { prisma } from "../../../../database/prismaClient";
import { IAuthenticateClient } from "./IAuthenticateClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateClientUseCase {
    async execute({username, password}: IAuthenticateClient) {

        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (!client) {
            throw new Error("User does not exists")
        }

        const passwordMatch = await compare(password, client.password)

        if (!passwordMatch) {
            throw new Error("Incorrect Password")
        }

        const token = sign({ username}, 'secret', {
            subject: client.id,
            expiresIn: '1h'
        })

        return token

    }
}