import { Environments } from "../environments/Environments"
import { RabbitMQConsumerProvider } from "../providers/implementations/RabbitMQConsumerProvider"
import { CreateTurmaController } from "./createTurma/CreateTurmaController";
import { CreateTurmaUseCase } from "./createTurma/CreateTurmaUseCase"

const conn: Environments = new Environments();
const rabbitMQConsumerProvider = new RabbitMQConsumerProvider(conn.prd);

const createTurmaUseCase = new CreateTurmaUseCase(rabbitMQConsumerProvider);

const createTurmaController = new CreateTurmaController(createTurmaUseCase);

export { createTurmaUseCase, createTurmaController }