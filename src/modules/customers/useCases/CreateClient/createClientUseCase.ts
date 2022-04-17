import { ICreateClient } from "./ICreateClient";
import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

export class CreateClientUseCase {
    
    async execute({username, password}: ICreateClient) {

        const userExists = await prisma.clients.findUnique({
            where: {
                username
            },
            
        })

        if (userExists) {
            throw new Error('User Already Exists')
        }

        const hashedPassword = await hash(password, 10)

        const response = await prisma.clients.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        return response

    }
}