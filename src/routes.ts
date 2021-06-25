import { Router } from "express";
import { createTurmaController } from "./useCases";

const router = Router()

router.get('/createTurma', (request, response) => {
    return createTurmaController.handle();
})

export { router }
