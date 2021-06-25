import { Turma } from "../../entities/Turma";
import { ITurmaRepository } from "../ITurmaRepository"
import { LocalStorage } from "node-localstorage";


export class ScratchTurmaRepository implements ITurmaRepository
{
    private localStorage = new LocalStorage('./scratch');
    private TURMAS_LIST_KEY = 'turmasList';

    async save(turma: Turma): Promise<void>
    {   
        let turmasListToSave = this.getTurmasList();
        turmasListToSave.push(turma);
        this.localStorage.setItem(this.TURMAS_LIST_KEY, JSON.stringify(turmasListToSave));
    }

    getTurmasList(): Turma[]
    {
        let turmasList = [];
        let turmasListStringfy = this.localStorage.getItem(this.TURMAS_LIST_KEY);

        if(turmasListStringfy !== '' && turmasListStringfy !== null)
            turmasList = JSON.parse(turmasListStringfy);
        else turmasList = [];

        return turmasList;
    }
}