import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliveryManUseCase {
    async execute(id: string) {

        const response = await prisma.deliveryman.findMany({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                deliveries: true
            }
        })

        return response
    }

}