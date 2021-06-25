import { uuid } from "uuidv4";

export class Turma
{
    readonly id!: string;
    nome: string;
    nomeAluno: string;

    constructor(nome: string, nomeAluno: string, id?: string)
    {
        this.nome = nome;
        this.nomeAluno = nomeAluno;
        
        if(!id)
        {
            this.id = uuid();
        }
    }
}