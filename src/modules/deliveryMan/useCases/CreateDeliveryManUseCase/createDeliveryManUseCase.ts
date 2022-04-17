import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliveryMan } from "./ICreateDeliveryMan";

export class CreateDeliveryManUseCase {
    async execute({username, password}: ICreateDeliveryMan) {

        const userExists = await prisma.deliveryman.findUnique({
            where: {
                username
            }
        })

        if (userExists) {
            throw new Error('User Already Exists')
        }

        const hashedPassword = await hash(password, 10)

        const response = await prisma.deliveryman.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        return response
    }

}