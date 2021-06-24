import { Turma } from "../../../entities/Turma";
import { IConsumerProvider } from "../IConsumerProvider";
import { ScratchTurmaRepository } from "../../repositories/implementations/ScratchTurmaRepository";

export class RabbitMQConsumerProvider implements IConsumerProvider
{
    private amqp = require('amqplib/callback_api');

    constructor(private connUrl: string) { }

    consumer(queueName: string): Promise<Turma> {
        let turma: any;
        let usersRepository = new ScratchTurmaRepository();

        this.amqp.connect(this.connUrl, function(err: any, conn: any) {
            conn.createChannel(function(err: any, ch: any) {
                ch.consume(queueName, function(msg: any) {
                    const { email, password, id } = JSON.parse(
                        msg.content.toString()
                        );
                        
                        turma = { email, password, id};
                        usersRepository.save(turma);

                        ch.ack(msg)
                },
                { noAck: false }
                );
            })
        });
        return turma;
    }

}