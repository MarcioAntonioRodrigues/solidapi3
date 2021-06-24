import { Environments } from "../../environments/Environments";
import { RabbitMQConsumerProvider } from "../../providers/implementations/RabbitMQConsumerProvider";

export class CreateTurmaUseCase
{
    private QUEUE_NAME = 'turma creation';

    constructor(private rabbitMQConsumerProvider: RabbitMQConsumerProvider){ }

    async execute()
    {
        let env = new Environments();
        let conn = env.prd;

        this.rabbitMQConsumerProvider = new RabbitMQConsumerProvider(conn);
        await this.rabbitMQConsumerProvider.consumer(this.QUEUE_NAME);
    }
}
