import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryMan } from "./middlewares/ensureAuthenticateDeliveryMan";
import { AuthenticateClientController } from "./modules/accounts/UseCases/AuthenticateClient/authenticateClientController";
import { AuthenticateDeliveryManController } from "./modules/accounts/UseCases/AuthenticateDeliveryMan/authenticateDeliveryManController";
import { CreateClientController } from "./modules/customers/useCases/CreateClient/createClientController";
import { FindAllDeliveriesController } from "./modules/customers/useCases/FindAllDeliveries/findAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDelivery/createDeliveryController";
import { FindAllWithoutEndDateController } from "./modules/deliveries/useCases/FindAllWithoutEndDate/findAllWithoutEndDateController";
import { UpdateDeliveryManController } from "./modules/deliveries/useCases/UpdateDeliveryMan/updateDeliveryManController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/UpdateEndDate/updateEndDateController";
import { CreateDeliveryManController } from "./modules/deliveryMan/useCases/CreateDeliveryManUseCase/createDeliveryManController";
import { FindAllDeliveriesDeliveryManController } from "./modules/deliveryMan/useCases/FindAllDeliveriesDeliveryMan/findAllDeliveriesDeliveryManController";

const routes = Router()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()
const createClientController = new CreateClientController()
const createDeliveryManController = new CreateDeliveryManController()
const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateController = new FindAllWithoutEndDateController()
const updateDeliveryManController = new UpdateDeliveryManController()
const findAllDeliveriesUseCase = new FindAllDeliveriesController()
const findAllDeliveriesDeliveryManController = new FindAllDeliveriesDeliveryManController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client/auth",  authenticateClientController.handle)
routes.post("/deliveryman/auth", authenticateDeliveryManController.handle)
routes.post("/client",  createClientController.handle)
routes.post("/deliveryman", createDeliveryManController.handle)
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery/available", ensureAuthenticateDeliveryMan, findAllWithoutEndDateController.handle)
routes.put("/delivery/deliveryman/:id_delivery", ensureAuthenticateDeliveryMan, updateDeliveryManController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesUseCase.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryMan, findAllDeliveriesDeliveryManController.handle)
routes.put("/delivery/enddate/:id_delivery", ensureAuthenticateDeliveryMan, updateEndDateController.handle)

export {routes} 
