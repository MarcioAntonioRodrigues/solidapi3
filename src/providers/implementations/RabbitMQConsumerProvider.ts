import { Turma } from "../../entities/Turma";
import { IConsumerProvider } from "../IConsumerProvider";
import { ScratchTurmaRepository } from "../../repositories/implementations/ScratchTurmaRepository";

export class RabbitMQConsumerProvider implements IConsumerProvider
{
    private amqp = require('amqplib/callback_api');

    constructor(private connUrl: string) { }

    async consumer(queueName: string): Promise<Turma> {
        let turma: any;
        let turmasRepository = new ScratchTurmaRepository();

        this.amqp.connect(this.connUrl, function(err: any, conn: any) {
            conn.createChannel(function(err: any, ch: any) {
                ch.consume(queueName, function(msg: any) {
                    const { nome, idade } = JSON.parse(
                        msg.content.toString()
                        );
                        console.log('nomeAluno', nome)
                        console.log('idade', idade)

                        let nomeTurma;
                        if(idade > 13)
                            nomeTurma = 'Ensino médio';
                        else nomeTurma = 'Ensino fundamental';
                        
                        turma = { nome, nomeTurma };
                        turmasRepository.save(turma);

                        ch.ack(msg)
                },
                { noAck: false }
                );
            })
        });
        return turma;
    }
}