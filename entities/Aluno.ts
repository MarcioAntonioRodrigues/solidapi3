export class Aluno
{
    public nome: string
    public cpf: string
    public idade: number
    public email: string

    constructor(nome: string, cpf: string, idade: number, email: string)
    {
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.email = email
    }
}