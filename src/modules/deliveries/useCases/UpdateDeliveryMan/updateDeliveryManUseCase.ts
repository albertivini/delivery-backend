import { prisma } from "../../../../database/prismaClient";
import { IUpdateDeliveryMan } from "./IUpdateDeliveryMan";

export class UpdateDeliveryManUseCase {
    
    async execute({id_delivery, id_deliveryman}: IUpdateDeliveryMan) {

        const deliveryExists = await prisma.deliveries.findFirst({
            where: {
                id: id_delivery
            }
        })

        if (!deliveryExists) {
            throw new Error("Delivery not Exists")
        }

        const result = await prisma.deliveries.update({
            data: {
                id_deliveryman,
            },
            where: {
                id: id_delivery
            }
        })

        return result
    }
}