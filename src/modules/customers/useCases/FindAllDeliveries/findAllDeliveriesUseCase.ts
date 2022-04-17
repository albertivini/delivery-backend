import { Clients, Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { IClient } from "./IClient";

export class FindAllDeliveriesUseCase {
    
    async execute(id: string) {

        const deliveries = await prisma.clients.findMany({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                deliveries: true,
            }
        })

        return deliveries

    }
}