import { Turma } from "../../entities/Turma";

export interface IConsumerProvider
{
    consumer(queueName: string): Promise<Turma>;
}