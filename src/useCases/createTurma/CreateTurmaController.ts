import { CreateTurmaUseCase } from "./CreateTurmaUseCase";

export class CreateTurmaController
{
    constructor(private createTurmaUseCase: CreateTurmaUseCase){}   

    async handle(): Promise<void>
    {
        try
        {
            await this.createTurmaUseCase.execute();
        }
        catch(err)
        {
            return err.message;
        }
    }
}