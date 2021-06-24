import { uuid } from "uuidv4";
import { Aluno } from "./Aluno";

export class Turma
{
    readonly id:  string;
    nome: string;
    aluno: Aluno;

    constructor(nome: string, aluno: Aluno, id?: string)
    {
        this.nome = nome;
        this.aluno = aluno;
        
        if(!id)
        {
            this.id = uuid();
        }
    }
}