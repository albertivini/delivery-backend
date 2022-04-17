import { prisma } from "../../../../database/prismaClient";
import { IUpdateEndDate } from "./IUpdateEndDate";

export class UpdateEndDateUseCase {
    
    async execute({id_delivery, id_deliveryman}: IUpdateEndDate) {

        const deliveryExists = await prisma.deliveries.findFirst({
            where: {
                id: id_delivery
            }
        })

        if (!deliveryExists) {
            throw new Error("Delivery not Exists")
        }

        const result = await prisma.deliveries.updateMany({
            data: {
                end_at: new Date(),
            },
            where: {
                id: id_delivery,
                id_deliveryman
            }
        })

        return result
    }
}