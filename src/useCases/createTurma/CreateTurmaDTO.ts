import { Aluno } from "../../../entities/Aluno";

export class CreateTurmaDto
{
    nome: string;
    aluno: Aluno;

    constructor(nome: string, aluno: Aluno)
    {
        this.nome = nome;
        this.aluno = aluno;
    }
}