import { Turma } from '../entities/Turma'
export interface ITurmaRepository
{
    save(turma: Turma): Promise<void>;
}